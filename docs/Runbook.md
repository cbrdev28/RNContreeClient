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
