/**
 * This file is the container for the debug screen.
 */

import React, { useCallback } from 'react';
import { useEnvironmentContext } from '../MainApp/EnvironmentContext/EnvironmentContextProvider';
import { DebugScreenNavRouteProp } from '../RootNavigation/RootBottomNavigator/RootBottomNavigator.types';
import { RootNavigationRoutes } from '../RootNavigation/RootNavigation.routes';
import { DebugScreen } from './DebugScreen';

export const DebugScreenContainer = ({
  route,
  navigation,
}: DebugScreenNavRouteProp) => {
  const { testNavParam } = route.params;
  const envContext = useEnvironmentContext();

  const showModal = useCallback(() => {
    navigation.navigate(RootNavigationRoutes.TextInputModal);
  }, [navigation]);

  return (
    <DebugScreen
      testNavParam={testNavParam}
      apolloServerUriFromContext={envContext.apolloServerUri}
      apolloServerUriDebugFromContext={envContext?.apolloServerUriDebug}
      showModal={showModal}
    />
  );
};
