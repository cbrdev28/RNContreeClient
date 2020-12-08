/**
 * This file creates the React Context for the Environment.
 */

import React from 'react';
import { Environment } from '../../Environment/Environment';

const defaultContext: Environment = {
  apolloServerUri: 'defaultApolloServerUri',
};

export const EnvironmentContext = React.createContext<Environment>(
  defaultContext,
);
