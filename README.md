# Project Name: Turn Up

An app to help you find something to do in the city of Tampere e.g., when you are travelling for a business and have an evening to spend, or you are looking for something new or different to do

## Branch name convention:

A git branch should start with a category. Pick one of these: feature, bugfix, hotfix, test and docs.

+ feature is for adding, refactoring or removing a feature
+ bugfix is for fixing a bug
+ hotfix is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency)
+ test is for experimenting outside of an issue/ticket
+ docs is for writing, updating or fixing documentation

Including Jira (or other Project Management Tool) ticket numbers

<b>For example</b>: if we have ticket number 1 with the title "Create an API for selecting and storing user personal interests" so the branch should be: <code>feature/Create-an-API-for-selecting-and-storing-user-personal-interests</code>

## Technologies Used in Frontend

- **React** - A JavaScript library for building user interfaces. [Documentation](https://reactjs.org/docs/getting-started.html)
- **Vite** - A fast development build tool that supports modern web technologies. [Documentation](https://vitejs.dev/)
- **TypeScript** - A statically typed superset of JavaScript. [Documentation](https://www.typescriptlang.org/docs/)
- **Zustand** - A minimalistic state management library for React. [Documentation](https://zustand.surge.sh/)
- **Material UI** - A popular React UI framework. [Documentation](https://mui.com/)
- **Eslint** - A pluggable and configurable linter tool for identifying and fixing code problems. [Documentation](https://eslint.org/docs/user-guide/getting-started)
- **Prettier** - An opinionated code formatter. [Documentation](https://prettier.io/docs/en/index.html)
- **react-i18next** - Internationalization for React applications. [Documentation](https://react.i18next.com/)
- **react-helmet-async** - A library for setting head tags in React. [Documentation](https://www.npmjs.com/package/react-helmet-async)

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

## How to Run

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Pull the backend stack from amplify by running `amplify pull`

```
$ amplify pull

   ╭────────────────────────────────────────────────────────────╮
   │                                                            │
   │                     Update available:                      │
   │   Run amplify upgrade for the latest features and fixes!   │
   │                                                            │
   ╰────────────────────────────────────────────────────────────╯

? Select the authentication method you want to use: AWS access keys
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
? region:  eu-north-1
? Which app are you working on? d2ormrrtjqw2j9
? Pick a backend environment: dev
? Choose your default editor: Visual Studio Code
√ Choose the type of app that you're building · javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm run build
? Start Command: npm run start
✅ GraphQL schema compiled successfully.

Edit your schema at C:\Users\anhmi\OneDrive\Desktop\minh-2023\TurnUp\amplify\backend\api\turnup\schema.graphql or place .graphql files in a directory at C:\Users\anhmi\OneDrive\Desktop\minh-2023\TurnUp\amplify\backend\api\turnup\schema
⚠️ Unable to successfully configure component generation for GraphQL. This will impact generaating forms and components bound to your data models.
⚠️ Run 'amplify update codegen' to ensure GraphQL configurations for your project are correctt.
? Do you plan on modifying this backend? Yes
| Building resource api/turnup✅ GraphQL schema compiled successfully.

Edit your schema at C:\Users\anhmi\OneDrive\Desktop\minh-2023\TurnUp\amplify\backend\api\turnup\schema.graphql or place .graphql files in a directory at C:\Users\anhmi\OneDrive\Desktop\minh-2023\TurnUp\amplify\backend\api\turnup\schema
✔ Successfully pulled backend environment dev from the cloud.
✅ 

✅ Successfully pulled backend environment dev from the cloud.
Run 'amplify pull' to sync future upstream changes.

✅ GraphQL schema compiled successfully.

Edit your schema at C:\Users\anhmi\OneDrive\Desktop\minh-2023\TurnUp\amplify\backend\api\turnup\schema.graphql or place .graphql files in a directory at C:\Users\anhmi\OneDrive\Desktop\minh-2023\TurnUp\amplify\backend\api\turnup\schema
⚠️ Unable to successfully configure component generation for GraphQL. This will impact generaating forms and components bound to your data models.
⚠️ Run 'amplify update codegen' to ensure GraphQL configurations for your project are correctt.
```

4. Run `npm install` to install the project dependencies.
5. Run `npm run dev` to start the development server. Your application will be available at `http://localhost:3000`.
6. Run `npm run dev-local` to start the development server with local AWS Amplify backend.

## How to Build and Review the Build

1. After installing dependencies, run `npm run build` to create a production build of your application.
2. Run `npm run preview` to serve the production build locally for review. Your application will be available at `http://localhost:8080`.

## Code Formatting

Before merging your code into the `dev` or `main` branch, make sure to format your code by running:

```
npm run format
```

This ensures consistent code style across the project.

## Folder Structure

- `/pages`: This directory contains the pages of the application.
- `/components`: Place the reusable React components here.
- `/stores`: This directory contains the store for state management.
- `/translations`: Currently, it has translations for English and Finnish languages.

## Environment setup

### Client

- create a .env file with command `cp .env.example .env`

- add the secret values from different channels. eg: discord or a password management system

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
````
## License

This project is developed and maintained by Tampere University students and is licensed under the [MIT License](LICENSE).
## Author

  + Eero Laine: eero.laine@tuni.fi
  + Santeri Ora: santeri.ora@tuni.fi
  + Lassi Kirvesmäki: lassi.kirvesmaki@tuni.fi
  + Finnan Solomon: finnan.solomon@tuni.fi
  + Tuan Nguyen: tuan.q.nguyen@tuni.fi
  + Anisul Mahmud: anisul.mahmud@tuni.fi
  + Minh Hoang: minh.hoang@tuni.fi
