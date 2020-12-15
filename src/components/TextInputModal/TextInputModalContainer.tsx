/**
 * This is the container for the text input modal.
 */

import React, { useCallback } from 'react';
import { useEnvironmentContext } from '../../MainApp/EnvironmentContext/EnvironmentContextProvider';
import { TextInputModalNavRouteProp } from '../../RootNavigation/RootNavigation.types';
import { TextInputModal } from './TextInputModal';

export const TextInputModalContainer = ({
  route: _route,
  navigation,
}: TextInputModalNavRouteProp) => {
  const env = useEnvironmentContext();
  const dismiss = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const submit = useCallback(
    async (text: string) => {
      dismiss();
      await env.setApolloServerUriDebug(text);
    },
    [dismiss, env],
  );

  return <TextInputModal onDismiss={dismiss} onSubmit={submit} />;
};
