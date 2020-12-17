/**
 * Container for the Welcome screen
 */

import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { gqlLogoutUserMutation } from '../../../Network/mutations/logoutUserMutation';
import { Welcome } from './Welcome';
import { useEnvironmentContext } from '../../../MainApp/EnvironmentContext/EnvironmentContextProvider';

export const WelcomeContainer = () => {
  const envContext = useEnvironmentContext();
  const [logoutUser] = useMutation(gqlLogoutUserMutation);
  const didTapLogout = useCallback(async () => {
    try {
      await logoutUser();
    } catch (error) {
      // Hopefully this should not happen
      console.error(error);
    }
    // TODO: Reset user session in context
    // This will re-render the home navigation to show the
    // authentication screen
  }, [logoutUser]);
  return (
    <Welcome
      userName={envContext?.currentUser?.name || null}
      didTapLogout={didTapLogout}
    />
  );
};
