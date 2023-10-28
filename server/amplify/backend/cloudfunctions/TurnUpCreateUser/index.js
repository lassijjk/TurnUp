const { Sha256 } = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");

const GRAPHQL_ENDPOINT = process.env.API_TURNUP_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'eu-north-1';

const query = `
  mutation CreateUser($input: CreateUserInput!){
    createUser(input: $input) {
      id
      userSub
    }
  }
`;

//Using admin access to connect to AWS AppSync and create new user.
//Triggered by Cognito pre sign-up.
exports.handler = async (event, context, callback) => {
  const endpoint = new URL(GRAPHQL_ENDPOINT);
  
  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const variables = {
    input: {
      userSub: event.userName,
      givenName: event.request.userAttributes.given_name,
      familyName: event.request.userAttributes.family_name,
      email: event.request.userAttributes.email,
    }
  };
  
  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query, variables }),
    path: endpoint.pathname
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(GRAPHQL_ENDPOINT, signed);
  
  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message
        }
      ]
    };
  }

  if (body.errors) {
    console.log(statusCode, body.errors);
    callback(body.errors, event);
  } else {
    callback(null, event);
  }
};
