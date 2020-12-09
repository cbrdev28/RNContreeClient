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
  return <TextInputModal onDismiss={dismiss} />;
};
