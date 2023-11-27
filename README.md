This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start

#start metro server and clean cache
yarn start --reset-cache
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios

#for specific simulator
yarn ios --simulator="iPhone 15 Pro"
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Completed Tasks

### Screens

- Login/SignIn Screen (only functional for Google Login)

  - only functional for google login
  - redirects to the signUp screen when clicked on 'Sign Up Now'

- Signup Screen

  - I made it mistakenly, it's not functional but it redirects to the login screen when clicked on 'Login Now'

- Home Screen

  - Displays logged in user's name
  - used Flatlist to render the todo list
  - in the header there is a logout/signout button which redirects to the login screen
  - on clicking on each todo item redirects to the list details screen

- List details screen

### Flatlist Optimization
 
- Used a function named *renderItem* instead of calling a direct callback function in flatlist's renderItem prop. 

- Tried to optimized the flat list as we are getting a large dataset from the api. Used props for optimizing 
   - removeClippedSubviews
   - initialNumToRender
   - maxToRenderPerBatch

### Pagination

I created infinite scroll for the pagination, when *fetchMoreData* function is called in  *onEndReached* prop of Flatlist, it's fetching more data, thus creating the infinite scroll.

### State Management

- used *Redux Toolkit* for local state management 
- for API calling used *RTK Query*

### Env Variables

added .env file for keeping the secret keys secure

### Error Handling

- If any error occurs , an error alert will be shown on the home screen

### Unit Test

I have tried unit testing for the first time in React Native, for some reason there are some configuration issue which I couldn't solve. I was getting multiple errors, I fixed some but lastly I got this error which I couldn't solve

```bash
/Users/swarnaliroy/Documents/Projects/YounodeHomeTask/node_modules/@react-native/js-polyfills/error-guard.js:44
  } < mixed > , TOut;
        ^

  SyntaxError: Unexpected token ','
```
