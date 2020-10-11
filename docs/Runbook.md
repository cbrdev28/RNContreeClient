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
