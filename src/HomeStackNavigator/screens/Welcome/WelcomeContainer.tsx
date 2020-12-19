/**
 * Container for the Welcome screen
 */

import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import { Button } from 'react-native';
import { useMutation } from '@apollo/client';

import { gqlLogoutUserMutation } from '../../../Network/mutations/logoutUserMutation';
import { useEnvironmentContext } from '../../../MainApp/EnvironmentContext/EnvironmentContextProvider';
import { Messages } from '../../../resources/messages';

import { WelcomeNavRouteProp } from './Welcome.types';
import { Welcome } from './Welcome';

export const WelcomeContainer = ({ navigation }: WelcomeNavRouteProp) => {
  const envContext = useEnvironmentContext();
  const [logoutUser] = useMutation(gqlLogoutUserMutation);

  const didTapLogout = useCallback(async () => {
    try {
      await logoutUser();
    } catch (error) {
      // Hopefully this should not happen
      console.error(error);
    }
    // This will re-render the home navigation to show the
    // authentication screen
    await envContext.resetCurrentUserSession();
  }, [logoutUser, envContext]);

  // The logout button for the right header component
  const LogoutButton = useMemo(() => {
    return function LogoutButton_() {
      return <Button title={Messages.logout} onPress={didTapLogout} />;
    };
  }, [didTapLogout]);

  // From React Navigation docs:
  // https://reactnavigation.org/docs/header-buttons/
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: LogoutButton,
    });
  }, [navigation, LogoutButton]);

  return <Welcome userName={envContext?.currentUser?.name || null} />;
};
