const fetch = require("node-fetch");


//Old lamda function using API key to authenticate
exports.handler = async function (event, context, callback) {
  const GRAPHQL_ENDPOINT = process.env.API_TURNUP_GRAPHQLAPIENDPOINTOUTPUT;
  const GRAPHQL_API_KEY =  process.env.API_TURNUP_GRAPHQLAPIKEYOUTPUT;
  const query = `
    mutation CreateUser($input: CreateUserInput!){
      createUser(input: $input) {
        id
        userSub
      }
    }
  `;
  
  const variables = {
    input: {
      userSub: event.userName,
      givenName: event.request.userAttributes.given_name,
      familyName: event.request.userAttributes.family_name,
      email: event.request.userAttributes.email,
    }
  };
  
  const options = {
    method: "POST",
    headers: {
      "x-api-key": GRAPHQL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables })
  };
  
  let error = '';
  
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, options);
    const response = await res.json();
    if (response.data.errors) {
      error = 'GraphQL error: ' + JSON.stringify(response.data.errors);
    }
  } catch (error) {
    error = error.message;
  }
  
  if (error.length > 0) {
    callback(error, event);
  }
  
  callback(null, event);
};
