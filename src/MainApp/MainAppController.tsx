/**
 * This is the main app component
 * This is where core setup and providers will be handled
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigationController } from '../RootNavigation/RootNavigationController';
import { EnvironmentContextProvider } from './EnvironmentContext/EnvironmentContextProvider';

export const MainAppController = () => {
  return (
    <NavigationContainer>
      <EnvironmentContextProvider>
        <RootNavigationController />
      </EnvironmentContextProvider>
    </NavigationContainer>
  );
};
