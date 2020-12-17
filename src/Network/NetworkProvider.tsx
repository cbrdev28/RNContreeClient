/**
 * This is our Network Provider component.
 * It's a wrapper of the ApolloProvider.
 */

import React, { useMemo } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useEnvironmentContext } from '../MainApp/EnvironmentContext/EnvironmentContextProvider';
import { qglUserDefs } from './schema.types.ts/User';
import { gqlCredentialsInputDefs } from './schema.types.ts/CredentialsInput';
import {
  gqlCreateUserInputDefs,
  gqlCreateUserMutationDefs,
  gqlCreateUserPayloadDefs,
} from './mutations/createUserMutation';
import {
  gqlSignInUserInputDefs,
  gqlSignInUserPayloadDefs,
  gqlSignInUserMutationDefs,
} from './mutations/signInUserMutation';

export const NetworkProvider = (props: { children: React.ReactNode }) => {
  const HEADER_CONTREE_AUTH_TOKEN = 'Contree-Auth-Token';
  const envContext = useEnvironmentContext();

  const allSchemaDefs = useMemo(() => {
    return [
      // Common type
      qglUserDefs,
      gqlCredentialsInputDefs,
      // Create User
      gqlCreateUserInputDefs,
      gqlCreateUserPayloadDefs,
      gqlCreateUserMutationDefs,
      // Sign In User
      gqlSignInUserInputDefs,
      gqlSignInUserPayloadDefs,
      gqlSignInUserMutationDefs,
    ];
  }, []);

  const apolloClient = useMemo(() => {
    return new ApolloClient({
      uri: envContext.apolloServerUriDebug || envContext.apolloServerUri,
      cache: new InMemoryCache(),
      typeDefs: allSchemaDefs,
      headers: {
        HEADER_CONTREE_AUTH_TOKEN: envContext?.authToken || '',
      },
    });
  }, [envContext, allSchemaDefs]);

  return (
    <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
  );
};
