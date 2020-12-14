/**
 * The stack navigator for the home screens:
 * - Authentication
 *   - Welcome back
 *   - Log in
 *   - Sign up
 * - Welcome once logged in
 */

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeStackNavigatorRoutes } from './HomeStackNavigator.routes';
import { HomeStackNavigatorScreens } from './HomeStackNavigator.screens';
import { HomeStackNavigatorParams } from './HomeStackNavigator.types';

export const HomeStackNavigator = () => {
  const StackNavigator = createStackNavigator<HomeStackNavigatorParams>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <StackNavigator.Navigator>
      {isLoggedIn === true ? (
        <StackNavigator.Screen
          name={HomeStackNavigatorRoutes.welcome}
          component={HomeStackNavigatorScreens.welcome}
        />
      ) : (
        <StackNavigator.Screen
          name={HomeStackNavigatorRoutes.authentication}
          component={HomeStackNavigatorScreens.authentication}
        />
      )}
    </StackNavigator.Navigator>
  );
};
