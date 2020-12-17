/**
 * Container for the Welcome screen
 */

import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { gqlLogoutUserMutation } from '../../../Network/mutations/logoutUserMutation';
import { Welcome } from './Welcome';

export const WelcomeContainer = () => {
  const [logoutUser] = useMutation(gqlLogoutUserMutation);
  const didTapLogout = useCallback(async () => {
    try {
      await logoutUser({ variables: { input: {} } });
    } catch (error) {
      console.warn('Logout error', error);
    }
  }, [logoutUser]);
  return <Welcome didTapLogout={didTapLogout} />;
};
