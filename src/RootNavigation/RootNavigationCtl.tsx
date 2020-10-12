/**
 * This file handles the root navigation of the app.
 * This is the entry point for users navigation, it installs
 * the whole navigation tree.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Route } from './routes';
import { Screens } from './screens';

export const RootNavigationCtl = () => {
  const BottomTabNavigator = createBottomTabNavigator();
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name={Route.RNDemoApp}
        component={Screens.RNDemoApp}
      />
      <BottomTabNavigator.Screen
        name={Route.DebugScreen}
        component={Screens.DebugScreen}
      />
    </BottomTabNavigator.Navigator>
  );
};
