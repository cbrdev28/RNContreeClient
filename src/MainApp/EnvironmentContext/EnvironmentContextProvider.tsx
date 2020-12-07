/**
 * The Environment Context Provider component
 */

import React, { useMemo } from 'react';
import { Environment } from '../../Environment/Environment';
import { EnvironmentContext } from './EnvironmentContext';

export const EnvironmentContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const envContext = useMemo<Environment>(() => {
    return {
      apolloServerUri: 'apolloServerUriProvider',
    };
  }, []);

  return (
    <EnvironmentContext.Provider value={envContext}>
      {props.children}
    </EnvironmentContext.Provider>
  );
};

export function useEnvironmentContext() {
  return React.useContext(EnvironmentContext);
}
