# UM Communities: A public directory of all open Discords, Slacks, and other communities at Michigan!

## Why make UM Communities?

1. Because I was bored
2. More importantly, in the era of Covid interest in online communities has grown tremendously -- yet very few people seem to know about UMich's rich selection of Discord servers and other communities. Rather than having to sift through Reddit posts and other Discord servers to find them, UM Communities aims to bring visibility to all those communities at Michigan by providing students a centralized, secure location to find invites and links while also being able to share and submit their own.

### What this project uses

- React: Our favorite frontend library
- TypeScript: Static type checking
- React contexts: State management, specifically for accessing auth state in various parts of the project
- Firebase: Backend-as-a-Service (BaaS) for storing data and using authentication
- Material-UI: Component library of choice
- Eslint/Prettier: Configured to use [AirBnB's style guide](https://www.npmjs.com/package/eslint-config-airbnb)

## Setup

Install Dependencies

```bash
npm install .
```

Then rename `.env.sample` to `.env` and populate the fields with your respective firebaseConfig fields. These can be found by going to your project in Firebase project settings under the **general tab**.

To enable authentication, you **must** make sure Email/Password and Google are enabled as Sign-in Providers.

# Here's the boring CRA stuffs

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
