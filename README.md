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

## Technologies Used

- **React** - A JavaScript library for building user interfaces. [Documentation](https://reactjs.org/docs/getting-started.html)
- **Vite** - A fast development build tool that supports modern web technologies. [Documentation](https://vitejs.dev/)
- **TypeScript** - A statically typed superset of JavaScript. [Documentation](https://www.typescriptlang.org/docs/)
- **Zustand** - A minimalistic state management library for React. [Documentation](https://zustand.surge.sh/)
- **Material UI** - A popular React UI framework. [Documentation](https://mui.com/)
- **Eslint** - A pluggable and configurable linter tool for identifying and fixing code problems. [Documentation](https://eslint.org/docs/user-guide/getting-started)
- **Prettier** - An opinionated code formatter. [Documentation](https://prettier.io/docs/en/index.html)
- **react-i18next** - Internationalization for React applications. [Documentation](https://react.i18next.com/)
- **react-helmet-async** - A library for setting head tags in React. [Documentation](https://www.npmjs.com/package/react-helmet-async)

## How to Run

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Run `npm run dev` to start the development server. Your application will be available at `http://localhost:3000`.
5. Run `npm run dev-local` to start the development server with local AWS Amplify backend.

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