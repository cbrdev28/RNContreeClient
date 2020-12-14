/**
 * This file is the container for the debug screen.
 */

import React, { useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';

import { useEnvironmentContext } from '../MainApp/EnvironmentContext/EnvironmentContextProvider';
import { DebugScreenNavRouteProp } from '../RootNavigation/RootBottomNavigator/RootBottomNavigator.types';
import { RootNavigationRoutes } from '../RootNavigation/RootNavigation.routes';
import { DebugScreen } from './DebugScreen';

interface DebugUserData {
  id: number;
  name: string;
  email: string;
}
interface DebugRecoverSessionData {
  token: string;
  user: DebugUserData;
}
interface DebugRecoverSessionResponse {
  recoverSession: DebugRecoverSessionData;
}
interface DebugRecoverSessionParams {
  authToken: string;
}

export const DebugScreenContainer = ({
  route,
  navigation,
}: DebugScreenNavRouteProp) => {
  const { testNavParam } = route.params;
  const envContext = useEnvironmentContext();

  const showModal = useCallback(() => {
    navigation.navigate(RootNavigationRoutes.TextInputModal);
  }, [navigation]);

  const gqlQuery = gql`
    query RecoverSession($authToken: String!) {
      recoverSession(authToken: $authToken) {
        token
        user {
          id
          name
          email
        }
      }
    }
  `;

  const { error, data } = useQuery<
    DebugRecoverSessionResponse,
    DebugRecoverSessionParams
  >(gqlQuery, {
    variables: { authToken: 'tzlyp:2' },
  });
  if (error) {
    console.error('Error: ', error);
  }

  return (
    <DebugScreen
      testNavParam={testNavParam}
      apolloServerUriFromContext={envContext.apolloServerUri}
      apolloServerUriDebugFromContext={envContext?.apolloServerUriDebug}
      showModal={showModal}
      userToken={data?.recoverSession?.token}
      userId={data?.recoverSession?.user?.id}
      userName={data?.recoverSession?.user?.name}
      userEmail={data?.recoverSession?.user?.email}
    />
  );
};
