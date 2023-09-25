# TurnUp server

TurnUp server is using AWS Amplify with GraphQL and DynamoDB. The server is designed to work independently from the frontend.

## Usage

1. Make sure that the environment is correct and latest changes are pulled.

2. When using the server with the frontend, make sure that in the frontend is correctly configured (AWS Amplify). Verify also that the environment in the frontend matches the server's environment.

3. In frontend you can use same commands than in backend. (Do not edit the backend from the frontend or generate unnecessary files)

## Basic commands

### AWS setup

1. Install the Amplify CLI (if not already installed) `npm install -g @aws-amplify/cli`
2. Configure AWS IAM user `aws configure`

### AWS amplify setup

1. Pull existing project environment `amplify pull --appId YOUR_APP_ID --envName YOUR_ENV_NAME)`

### Mange AWS Amplify

1. Pull changes from AWS `amplify pull`
2. Deploy to AWS `amplify push`
3. Run backend locally `amplify mock`
4. Add new environment `amplify env add`
5. Switch between environments `amplify env checkout ENVIRONMENT_NAME`
6. List of environments `amplify env list`