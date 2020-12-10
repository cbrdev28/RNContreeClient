/**
 * This is the container for the text input modal.
 */

import React, { useCallback } from 'react';
import { TextInputModalNavRouteProp } from '../RootNavigation/RootNavigation.types';
import { TextInputModal } from './TextInputModal';

export const TextInputModalContainer = ({
  route: _route,
  navigation,
}: TextInputModalNavRouteProp) => {
  const dismiss = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const submit = useCallback(
    (text: string) => {
      console.warn('Submitted: ' + text);
      dismiss();
    },
    [dismiss],
  );

  return <TextInputModal onDismiss={dismiss} onSubmit={submit} />;
};
