/**
 * This file handles the root navigation of the app.
 * This is the entry point for users navigation, it installs
 * the whole navigation tree.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Route } from './RootNavigation.routes';
import { Screens } from './RootNavigation.screens';
import { BottomTabNavigatorParams } from './RootNavigation.types';

export const RootNavigationController = () => {
  const BottomTabNavigator = createBottomTabNavigator<
    BottomTabNavigatorParams
  >();
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name={Route.RNDemoApp}
        component={Screens.RNDemoApp}
      />
      <BottomTabNavigator.Screen
        name={Route.DebugScreen}
        component={Screens.DebugScreen}
        initialParams={{ testNavParam: 'testing param' }}
      />
    </BottomTabNavigator.Navigator>
  );
};
