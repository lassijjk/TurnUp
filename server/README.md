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

# API Guidelines

## Base URL
The base URL for the API is: `https://l199cimgf2.execute-api.eu-north-1.amazonaws.com/dev`

## Method: GET

## Query String Parameters

### `eventId`
- Description: Return an event with the specified event ID.
- Type: Integer
- Example: `eventId=123`

### `limit`
- Description: Limit the number of results returned.
- Type: Integer
- Example: `limit=10`

### `offset`
- Description: Offset the results by a certain number.
- Type: Integer
- Example: `offset=20`

### `nameSearch`
- Description: Search for events by event name.
- Type: String
- Example: `nameSearch=concert`

### `startDate`
- Description: Return events with a start date greater than the input start date.
- Type: Date (format: YYYY-MM-DD)
- Example: `startDate=2023-01-01`

### `endDate`
- Description: Return events with an end date less than the input end date.
- Type: Date (format: YYYY-MM-DD)
- Example: `endDate=2023-12-31`

### `userLat` and `userLon`
- Description: User location latitude and longitude coordinates.
- Type: Decimal
- Example: `userLat=61.4978` (Tampere latitude)
- Example: `userLon=23.7610` (Tampere longitude)

### `radius`
- Description: Define a bounding box to find events within a certain radius of the user's location. Requires `userLat` and `userLon` parameters.
- Type: Decimal
- Example: `radius=50` (within 50 km of the user's location)

**Note:** When using the `radius` parameter, you must also provide `userLat` and `userLon`.

### Example API Request
```http
GET https://l199cimgf2.execute-api.eu-north-1.amazonaws.com/dev?eventId=123&userLat=61.4978&userLon=23.7610&radius=50