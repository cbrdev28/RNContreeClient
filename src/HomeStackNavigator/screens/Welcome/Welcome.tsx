/**
 * The view component for the Welcome screen
 */

import React from 'react';
import { Text, View } from 'react-native';
import { useEnvironmentContext } from '../../../MainApp/EnvironmentContext/EnvironmentContextProvider';

export const Welcome = () => {
  // TODO: move this to the container
  const debugEnv = useEnvironmentContext();
  return (
    <View>
      <Text>Welcome: {debugEnv?.currentUser?.name || 'NO_NAME'}</Text>
    </View>
  );
};
