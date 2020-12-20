# Runbook

I'm starting right after running the command:
`npx react-native init RNContreeClient --template react-native-template-typescript`
And adding this project to github.

## First steps

- Using `yarn` instead of `npx`
  - `brew install yarn` (or `brew upgrade yarn`)
- Testing if things work (tutorial):
  - Manually start Xcode
  - Check in Xcode > Preferences > Locations > Command Line Tools:
  - In terminal:
    - `yarn start`, which runs `react-native start` to start the metro bundler
    - `yarn ios`, which runs `react-native run-ios`, to start a simulator and build the app

At this point, this should be enough to play around. I would like to make a first Pull Request to experiment with React Navigation.

Other things I have in mind but I will do later:

- Customize and setup Typescript compilation rules (and make them stricter)
- Look into lint rules, make sure I like them (I want spaces before/after curly brackets)
- At some point, look into release build on a device (official doc could help)
- Make better `yarn` commands if I don't find them explicit enough
- Learn how to write good tests?
- Eventually build proper foundation to handle styling & GraphQL

## Experimenting with React Navigation

The goal of the first pull request would be to setup React Navigation, bur first I would like to organize the code:

- All the new code will be under the folder `src/`
- All files should be under their own folder in `src/<FolderName>/`
- There should be only one file under `src/`, which is our `main.tsx`. This is the equivalent of the base file `index.js`, at a different level, in case we need to make modifications later on.
- For files which do not belong to a component and cannot really have their own folder, we will keep them in `src/common/`
- I moved the default/generated React Native demo file under: `src/RNDemoApp/`
- I will try to use the following name convention for controller files, by adding the suffix `Ctl`, like: `NameOfComponentCtl`

### Add React Navigation

The next goal is to add React Navigation, with a bottom navigator and 2 tabs: one for the demo app from React Native, and another one for debug purpose.

- Installing React Navigation:
  - https://reactnavigation.org/docs/getting-started

I forgot to keep track in the Runbook...

- I made a first version of a bottom tab navigator
  - Most of it was hardcoded and only showing:
    - An empty debug screen, with only one title
    - The content of the React Native demo app
- Next attempt was to remove some hardcoded parts:
  - I made an `enum` for the route names
  - And a `Record<>` for the screen components
- After that, I tried to add type support:
  - https://reactnavigation.org/docs/typescript
  - I added another file where I declare all the types, not ideal yet...

### Refactor first React Navigation implementation

After thinking (too much), I decided to make some conceptual changes:

- Component hierarchy: no more acronyms like `Ctl`, using full names
  - Each component/screen users can navigate to, will have a top-level `Container`, to handle all the navigation logic
  - Then it will have a `Controller`, where other logic (network) will be handled
  - And finally a component named as its root folder, to render the view
- Navigators, routes, screens, types, ... (still experimenting as it may change when adding more navigators)

  - I'd like to declare all the route names as an `enum AllRoutes` in `src/common`
    - Then each navigator will declare their own routes, as a subset of `AllRoutes`
  - Each navigator will have its own folder, our current one is the `RootNavigation` which has a `RootNavigationController` to render a `BottomTabNavigator` from React Navigation
    - Each navigator will declare the routes they can navigate to, i.e.: `RootNavigation.routes.ts`
    - Each navigator will declare a record of the screens they have, i.e.: `RootNavigation.screens.ts`
    - Each navigator will declare the navigation types/params for each screen they host, i.e.: `RootNavigation.params.ts`
    - Each navigator will declare their navigation types, i.e.: `RootNavigation.types.ts`
    - ... still under thought/construction

In the end, I realized I was trying to make this too complicated and have something dynamic when adding new screens.
I will still follow those ideas, but we don't need the `enum AllRoutes` for example.
I'm going to start with the debug screen and a bottom navigator with a simple implementation and we will see how it goes in the future.
Also, I no longer want to add an extra `Controller` component in the hierarchy. We will start only with `Container`, and `Controller` will be used as "sub-container" (when needed), which cannot be navigated to.

## Experimenting with Apollo Client

We will use Apollo Client to make our GraphQL request:

- https://www.apollographql.com/docs/react/integrations/react-native/
- The first thing I want to try is to change the Apollo uri from the Debug screen
  - This may help while debugging since I don't have a stable server
  - And it will be a first playground to add a sort of text input modal in the Debug screen

### Using React Context

Before I add the Apollo Client, I would like to make sure I have a way to provide some environment data in the React Context.
There is no obvious documentation about React Context, at least nothing I found very straightforward, so we will explore with code.

Here is a train of thoughts:

- Make a component to provide an environment object in the React Context
  - This component will be loading data asynchronously
  - It will be inside the `MainAppController`
- Declare an `Environment` interface
- Think about having an `AsyncStorageManager`, which would be inside the `MainAppController` for now

### Adding Apollo Client

By experimenting:

- Add `"@apollo/client": "3.2.7"` in `package.json`
  - Which REQUIRES: `"graphql": "15.4.0"` in `package.json`
- Made my own provider component: `NetworkProvider`, for Apollo Client

About our AsyncStorage wrapper:

- I had to add another dependency:
  - https://react-native-async-storage.github.io/async-storage/docs/install
  - Requires to manually run: `pod install` in the `ios` folder

### First query in Debug Screen

I'm going to play around with Apollo and make a first query of the debug screen.

## Experiment with Authentication

- Make a screen for users to login or sign up
- Make a welcome screen for logged in users
- Try to recover user session if the token is available in the local storage

## Experiment with GraphQL Subscriptions & Action Cable from Rails

A way to send/receive data synchronously:

- Mhttps://www.apollographql.com/docs/react/data/subscriptions/
- https://graphql-ruby.org/javascript_client/apollo_subscriptions#apollo-2--actioncable
