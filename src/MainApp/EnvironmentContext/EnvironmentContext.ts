/**
 * This file creates the React Context for the Environment.
 */

import React from 'react';
import { Environment } from '../../Environment/Environment';

const defaultContext: Environment = {
  apolloServerUri: 'defaultApolloServerUri',
  apolloServerUriDebug: null,
  setApolloServerUriDebug: async (_uri: string) => {},
  currentUser: null,
  authToken: null,
  setCurrentUserSession: async () => {},
};

export const EnvironmentContext = React.createContext<Environment>(
  defaultContext,
);
