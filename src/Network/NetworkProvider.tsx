/**
 * This is our Network Provider component.
 * It's a wrapper of the ApolloProvider.
 */

import React, { useMemo } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useEnvironmentContext } from '../MainApp/EnvironmentContext/EnvironmentContextProvider';
import { qglUserDefs } from './schema.types.ts/User';
import { gqlCredentialsInputDefs } from './schema.types.ts/CredentialsInput';
import { gqlCreateUserMutationDefs } from './mutations/createUserMutation';

export const NetworkProvider = (props: { children: React.ReactNode }) => {
  const envContext = useEnvironmentContext();

  const allSchemaDefs = useMemo(() => {
    return [
      qglUserDefs,
      gqlCredentialsInputDefs,
      gqlCredentialsInputDefs,
      gqlCreateUserMutationDefs,
    ];
  }, []);

  const apolloClient = useMemo(() => {
    return new ApolloClient({
      uri: envContext.apolloServerUriDebug || envContext.apolloServerUri,
      cache: new InMemoryCache(),
      typeDefs: allSchemaDefs,
    });
  }, [envContext, allSchemaDefs]);

  return (
    <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
  );
};
