/**
 * The view component for the Welcome screen
 */

import React from 'react';
import { Text, View } from 'react-native';

interface WelcomeProps {
  userName: string | null;
}

export const Welcome = (props: WelcomeProps) => {
  const { userName } = props;
  return (
    <View>
      {/* TODO: Move this to the container and use the stack navigator header */}
      <Text>Welcome: {userName || 'NO_NAME'}</Text>
    </View>
  );
};
