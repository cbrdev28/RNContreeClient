/**
 * This component is our root bottom navigator.
 * It has the following tabs:
 * - the demo app from React Native
 * - a debug screen
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootNavigationRoutes } from '../RootNavigation.routes';
import { RootNavigationScreens } from '../RootNavigation.screens';
import { BottomTabNavigatorParams } from '../RootNavigation.types';

export const RootBottomNavigator = () => {
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
