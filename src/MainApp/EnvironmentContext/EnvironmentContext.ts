/**
 * This file creates the React Context for the Environment.
 */

import React from 'react';
import { Environment } from '../../Environment/Environment';

// The default context is used only when a component tries to access
// the React Context without the provider in the tree
const defaultContext: Environment = {
  apolloServerUri: 'defaultApolloServerUri',
  apolloServerUriDebug: null,
  setApolloServerUriDebug: async (_uri: string) => {},
  currentUser: null,
  authToken: null,
  setCurrentUserSession: async () => {},
  resetCurrentUserSession: async () => {},
};

export const EnvironmentContext = React.createContext<Environment>(
  defaultContext,
);
