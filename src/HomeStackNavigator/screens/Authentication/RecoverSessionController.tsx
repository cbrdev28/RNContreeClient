/**
 * A controller component to attempt to recover
 * the current user session
 */

import React from 'react';
import { Text } from 'react-native';
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

  if (error) {
    // Hopefully this does not happen
    console.warn(Messages.recoverSessionError, error);
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
    } else {
      // Recover user session
      envContext.setCurrentUserSession(user, token);
    }
  }

  return <Text>{Messages.recoverSessionError}</Text>;
};
