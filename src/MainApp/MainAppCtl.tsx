/**
 * This is the main app component
 * This is where core setup and providers will be handled
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigationCtl } from '../RootNavigation/RootNavigationController';

export const MainAppCtl = () => {
  return (
    <NavigationContainer>
      <RootNavigationCtl />
    </NavigationContainer>
  );
};
