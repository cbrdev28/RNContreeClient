/**
 * The Environment Context Provider component.
 * This reads our local async storage to populate
 * the Environment context, and returns a loading
 * indicator during that time.
 */

import React, { useEffect, useMemo, useState } from 'react';
import { Environment } from '../../Environment/Environment';
import { FullScreenLoadingIndicator } from '../../FullScreenLoadingIndicator/FullScreenLoadingIndicator';
import { LocalStorage } from '../../LocalStorage/LocalStorage';
import { EnvironmentContext } from './EnvironmentContext';

interface LocalStorageEnvironmentData {
  apolloServerUri?: string | null;
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
      setLocalStorageEnv({ apolloServerUri: localStorageApolloServerUri });
      setLoading(false);
    };

    fetchLocalStorageEnvData();
  }, []);

  // Our default Environment object with static values
  const defaultEnvContext = useMemo<Environment>(() => {
    return {
      apolloServerUri: 'apolloServerUriProvider',
    };
  }, []);

  // Update Environment with values from local storage
  const envContext: Environment = {
    ...defaultEnvContext,
    apolloServerUriDebug: localStorageEnv?.apolloServerUri,
  };

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
