/**
 * This file is the container for the debug screen.
 */

import React from 'react';
import { useEnvironmentContext } from '../MainApp/EnvironmentContext/EnvironmentContextProvider';
import { DebugScreenNavRouteProp } from '../RootNavigation/RootBottomNavigator/RootBottomNavigator.types';
import { DebugScreen } from './DebugScreen';

export const DebugScreenContainer = ({
  route,
  navigation: _navigation,
}: DebugScreenNavRouteProp) => {
  const { testNavParam } = route.params;
  const envContext = useEnvironmentContext();

  return (
    <DebugScreen
      testNavParam={testNavParam}
      apolloServerUriFromContext={envContext.apolloServerUri}
      apolloServerUriDebugFromContext={envContext?.apolloServerUriDebug}
    />
  );
};
