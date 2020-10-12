/**
 * This file handles the root navigation of the app.
 * This is the entry point for users navigation, it installs
 * the whole navigation tree.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RNDemoApp from '../RNDemoApp/RNDemoApp';
import { DebugScreen } from '../DebugScreen/DebugScreen';

export const RootNavigationCtl = () => {
  const BottomTabNavigator = createBottomTabNavigator();
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name="RNDemoApp" component={RNDemoApp} />
      <BottomTabNavigator.Screen name="DebugScreen" component={DebugScreen} />
    </BottomTabNavigator.Navigator>
  );
};
