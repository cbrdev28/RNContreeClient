/**
 * This is our Network Provider component.
 * It's a wrapper of the ApolloProvider.
 */

import React, { useMemo } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useEnvironmentContext } from '../MainApp/EnvironmentContext/EnvironmentContextProvider';

export const NetworkProvider = (props: { children: React.ReactNode }) => {
  const envContext = useEnvironmentContext();

  const apolloClient = useMemo(() => {
    return new ApolloClient({
      uri: envContext.apolloServerUriDebug || envContext.apolloServerUri,
      cache: new InMemoryCache(),
    });
  }, [envContext]);

  return (
    <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
  );
};
