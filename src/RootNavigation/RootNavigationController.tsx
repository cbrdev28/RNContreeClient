/**
 * This file handles the root navigation of the app.
 * This is the entry point for users navigation, it installs
 * the whole navigation tree.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootBottomNavigator } from './RootBottomNavigator/RootBottomNavigator';

export const RootNavigationController = () => {
  const RootModalStackNavigator = createStackNavigator();
  return (
    <RootModalStackNavigator.Navigator mode="modal">
      <RootModalStackNavigator.Screen
        name={'RootBottomNavigator'}
        component={RootBottomNavigator}
      />
    </RootModalStackNavigator.Navigator>
  );
};
