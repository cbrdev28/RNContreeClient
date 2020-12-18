/**
 * The Environment Context Provider component.
 * This reads our local async storage to populate
 * the Environment context, and returns a loading
 * indicator during that time.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Environment } from '../../Environment/Environment';
import { FullScreenLoadingIndicator } from '../../components/FullScreenLoadingIndicator/FullScreenLoadingIndicator';
import { LocalStorage } from '../../LocalStorage/LocalStorage';
import { EnvironmentContext } from './EnvironmentContext';
import { User } from '../../Network/schema.types.ts/User';

interface LocalStorageEnvironmentData {
  apolloServerUri?: string | null;
  authToken?: string | null;
}

export const EnvironmentContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);
  const [localStorageEnv, setLocalStorageEnv] = useState<
    LocalStorageEnvironmentData
  >({});

  useEffect(() => {
    const fetchLocalStorageEnvData = async () => {
      setLoading(true);
      const localStorageApolloServerUri = await LocalStorage.get(
        LocalStorage.Keys.apolloServerUri,
      );
      const localStorageToken = await LocalStorage.get(
        LocalStorage.Keys.authToken,
      );
      setLocalStorageEnv({
        apolloServerUri: localStorageApolloServerUri,
        authToken: localStorageToken,
      });
      setLoading(false);
    };

    fetchLocalStorageEnvData();
  }, []);

  const [debugUri, setDebugUri] = useState<string | null>(null);
  const setApolloServerUriDebug = useCallback(async (apolloUri: string) => {
    await LocalStorage.set(LocalStorage.Keys.apolloServerUri, apolloUri);
    setDebugUri(apolloUri);
  }, []);

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const setCurrentUserSession = useCallback(
    async (user: User, token: string) => {
      await LocalStorage.set(LocalStorage.Keys.authToken, token);
      setLocalStorageEnv({ authToken: token });
      setCurrentUser(user);
    },
    [setLocalStorageEnv, setCurrentUser],
  );
  const resetCurrentUserSession = useCallback(async () => {
    await LocalStorage.remove(LocalStorage.Keys.authToken);
    setLocalStorageEnv({ authToken: null });
    setCurrentUser(null);
  }, [setCurrentUser, setLocalStorageEnv]);

  // Build our Environment object for the React
  const envContext = useMemo<Environment>(() => {
    return {
      apolloServerUri: 'http://127.0.0.1:3000/graphql',
      setApolloServerUriDebug,
      currentUser: currentUser,
      authToken: localStorageEnv?.authToken || null,
      setCurrentUserSession,
      resetCurrentUserSession,
      apolloServerUriDebug:
        debugUri || localStorageEnv?.apolloServerUri || null,
    };
  }, [
    setApolloServerUriDebug,
    currentUser,
    setCurrentUserSession,
    resetCurrentUserSession,
    debugUri,
    localStorageEnv,
  ]);

  if (loading) {
    return <FullScreenLoadingIndicator />;
  }

  return (
    <EnvironmentContext.Provider value={envContext}>
      {props.children}
    </EnvironmentContext.Provider>
  );
};

export function useEnvironmentContext() {
  return React.useContext(EnvironmentContext);
}
