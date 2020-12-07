/**
 * This file handles the root navigation of the app.
 * This is the entry point for users navigation, it installs
 * the whole navigation tree.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootNavigationRoutes } from './RootNavigation.routes';
import { RootNavigationScreens } from './RootNavigation.screens';
import { BottomTabNavigatorParams } from './RootNavigation.types';

export const RootNavigationController = () => {
  const BottomTabNavigator = createBottomTabNavigator<
    BottomTabNavigatorParams
  >();

  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name={RootNavigationRoutes.RNDemoApp}
        component={RootNavigationScreens.RNDemoApp}
      />
      <BottomTabNavigator.Screen
        name={RootNavigationRoutes.DebugScreen}
        component={RootNavigationScreens.DebugScreen}
        initialParams={{ testNavParam: 'Test param' }}
      />
    </BottomTabNavigator.Navigator>
  );
};
