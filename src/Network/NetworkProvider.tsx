/**
 * This is our Network Provider component
 * It's a wrapper of the ApolloProvider
 */

import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useEnvironmentContext } from '../MainApp/EnvironmentContext/EnvironmentContextProvider';

export const NetworkProvider = (props: { children: React.ReactNode }) => {
  const envContext = useEnvironmentContext();
  const apolloUri =
    envContext.apolloServerUriDebug || envContext.apolloServerUri;
  const apolloClient = new ApolloClient({
    uri: apolloUri,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
  );
};