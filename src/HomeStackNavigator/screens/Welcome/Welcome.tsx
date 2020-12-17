/**
 * The view component for the Welcome screen
 */

import React from 'react';
import { Button, Text, View } from 'react-native';
import { useEnvironmentContext } from '../../../MainApp/EnvironmentContext/EnvironmentContextProvider';

interface WelcomeProps {
  didTapLogout: () => Promise<void>;
}

export const Welcome = (props: WelcomeProps) => {
  // TODO: move this to the container
  const debugEnv = useEnvironmentContext();
  return (
    <View>
      <Text>Welcome: {debugEnv?.currentUser?.name || 'NO_NAME'}</Text>
      <Button onPress={props.didTapLogout} title={'Logout'} />
    </View>
  );
};
