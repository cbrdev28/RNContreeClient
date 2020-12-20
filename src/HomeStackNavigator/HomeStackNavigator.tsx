/**
 * The stack navigator for the home screens:
 * - Authentication
 *   - Welcome back
 *   - Log in
 *   - Sign up
 * - Welcome once logged in
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeStackNavigatorRoutes } from './HomeStackNavigator.routes';
import { HomeStackNavigatorScreens } from './HomeStackNavigator.screens';
import { HomeStackNavigatorParams } from './HomeStackNavigator.types';
import { Messages } from '../resources/messages';
import { useEnvironmentContext } from '../MainApp/EnvironmentContext/EnvironmentContextProvider';

export const HomeStackNavigator = () => {
  const StackNavigator = createStackNavigator<HomeStackNavigatorParams>();
  const env = useEnvironmentContext();
  return (
    <StackNavigator.Navigator>
      {env?.currentUser != null ? (
        <StackNavigator.Screen
          name={HomeStackNavigatorRoutes.welcome}
          component={HomeStackNavigatorScreens.welcome}
          options={{ title: Messages.welcomeTopBarTitle }}
        />
      ) : (
        <StackNavigator.Screen
          name={HomeStackNavigatorRoutes.authentication}
          component={HomeStackNavigatorScreens.authentication}
          options={{ title: Messages.authenticationTopBarTitle }}
        />
      )}
    </StackNavigator.Navigator>
  );
};
