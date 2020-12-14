/**
 * This is the main app component.
 * This is where core setup and providers will be handled.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigationController } from '../RootNavigation/RootNavigationController';
import { EnvironmentContextProvider } from './EnvironmentContext/EnvironmentContextProvider';
import { NetworkProvider } from '../Network/NetworkProvider';

export const MainAppController = () => {
  return (
    <NavigationContainer>
      <EnvironmentContextProvider>
        <NetworkProvider>
          <RootNavigationController />
        </NetworkProvider>
      </EnvironmentContextProvider>
    </NavigationContainer>
  );
};
