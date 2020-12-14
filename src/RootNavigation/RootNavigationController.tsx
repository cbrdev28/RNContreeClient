/**
 * This file handles the root navigation of the app.
 * This is the entry point for users navigation, it installs
 * the whole navigation tree.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootNavigationRoutes } from './RootNavigation.routes';
import { RootNavigationScreens } from './RootNavigation.screens';
import { RootModalStackNavigatorParams } from './RootNavigation.types';

export const RootNavigationController = () => {
  const RootModalStackNavigator = createStackNavigator<
    RootModalStackNavigatorParams
  >();

  return (
    <RootModalStackNavigator.Navigator mode="modal">
      <RootModalStackNavigator.Screen
        name={RootNavigationRoutes.RootBottomNavigator}
        component={RootNavigationScreens.RootBottomNavigator}
        options={{ headerShown: false }}
      />
      <RootModalStackNavigator.Screen
        name={RootNavigationRoutes.TextInputModal}
        component={RootNavigationScreens.TextInputModal}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
        }}
      />
    </RootModalStackNavigator.Navigator>
  );
};
