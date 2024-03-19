This is a new 

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
```

```bash
# Clean
yarn cache clean
cd android && ./gradlew clean
```

### Build APK

```bash
# Clean
cd android && ./gradlew clean
```

```bash
# Build
gradlew assembleRelease
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Screen Shots

### Welcome 
![welcome1](https://github.com/MalithMadusankha/ADHDApp/assets/78203677/b648d755-0a91-4ceb-9df7-1a7b4ca50218)
![welocome2](https://github.com/MalithMadusankha/ADHDApp/assets/78203677/78d3c380-ba8b-4c1a-b04d-a7fe84b369c4)

### Login
![login](https://github.com/MalithMadusankha/ADHDApp/assets/78203677/51f247c7-600f-4918-9a60-633bc169eaf9)

### Register
![register](https://github.com/MalithMadusankha/ADHDApp/assets/78203677/4130947b-0f72-4bcb-8f9a-06cb8f5162b0)





