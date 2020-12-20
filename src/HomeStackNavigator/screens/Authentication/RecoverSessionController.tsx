/**
 * A controller component to attempt to recover
 * the current user session
 */

import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useQuery } from '@apollo/client';

import { FullScreenLoadingIndicator } from '../../../components/FullScreenLoadingIndicator/FullScreenLoadingIndicator';
import { useEnvironmentContext } from '../../../MainApp/EnvironmentContext/EnvironmentContextProvider';
import {
  gqlRecoverSessionQuery,
  RecoverSessionQueryParams,
  RecoverSessionQueryResponse,
} from '../../../Network/queries/recoverSessionQuery';
import { Messages } from '../../../resources/messages';

interface RecoverSessionControllerProps {
  authToken: string;
}

export const RecoverSessionController = (
  props: RecoverSessionControllerProps,
) => {
  const { authToken } = props;
  const envContext = useEnvironmentContext();

  const { data, loading, error } = useQuery<
    RecoverSessionQueryResponse,
    RecoverSessionQueryParams
  >(gqlRecoverSessionQuery, { variables: { authToken } });

  const forceLogout = useCallback(() => {
    envContext.resetCurrentUserSession();
  }, [envContext]);

  if (error) {
    // This should not happen
    console.error(Messages.recoverSessionError, error);
    // Reset user session
    envContext.resetCurrentUserSession();
    return null;
  }

  if (loading) {
    return <FullScreenLoadingIndicator />;
  }

  if (data) {
    const token = data?.recoverSession?.token;
    const user = data?.recoverSession?.user;
    if (!token || !user) {
      // No valid data to recover session, logout user
      envContext.resetCurrentUserSession();
      return null;
    }
    // Recover user session with data
    envContext.setCurrentUserSession(user, token);
    return null;
  }

  // Hopefully we should never get there, since the session should
  // be reset if anything goes wrong while recovering
  // Show basic error message and a logout button to give a way
  // for users to manually reset the session
  return (
    <View>
      <Text>{Messages.recoverSessionError}</Text>
      <Button title={Messages.logout} onPress={forceLogout} />
    </View>
  );
};
