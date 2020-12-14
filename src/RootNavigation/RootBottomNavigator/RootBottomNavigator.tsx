/**
 * This component is our root bottom navigator.
 * It has the following tabs:
 * - the demo app from React Native
 * - a debug screen
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabNavigatorParams } from './RootBottomNavigator.types';
import { RootBottomNavigatorRoutes } from './RootBottomNavigator.routes';
import { RootBottomNavigatorScreens } from './RootBottomNavigator.screens';

export const RootBottomNavigator = () => {
  const BottomTabNavigator = createBottomTabNavigator<
    BottomTabNavigatorParams
  >();

  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name={RootBottomNavigatorRoutes.rnDemoApp}
        component={RootBottomNavigatorScreens.rnDemoApp}
      />
      <BottomTabNavigator.Screen
        name={RootBottomNavigatorRoutes.home}
        component={RootBottomNavigatorScreens.home}
      />
      <BottomTabNavigator.Screen
        name={RootBottomNavigatorRoutes.debugScreen}
        component={RootBottomNavigatorScreens.debugScreen}
        initialParams={{ testNavParam: 'Test param' }}
      />
    </BottomTabNavigator.Navigator>
  );
};
