/**
 * The Environment Context Provider component
 */

import React from 'react';
import { EnvironmentContext } from './EnvironmentContext';

export const EnvironmentContextProvider = (props: {
  children: React.ReactNode;
}) => {
  return (
    <EnvironmentContext.Provider
      value={{
        apolloServerUri: 'apolloServerUriProvider',
      }}>
      {props.children}
    </EnvironmentContext.Provider>
  );
};

export function useEnvironmentContext() {
  return React.useContext(EnvironmentContext);
}
