/**
 * The view component for the Welcome screen
 */

import React from 'react';
import { Button, Text, View } from 'react-native';
import { Messages } from '../../../resources/messages';

interface WelcomeProps {
  userName: string | null;
  didTapLogout: () => Promise<void>;
}

export const Welcome = (props: WelcomeProps) => {
  const { userName, didTapLogout } = props;
  return (
    <View>
      <Text>Welcome: {userName || 'NO_NAME'}</Text>
      <Button onPress={didTapLogout} title={Messages.logout} />
    </View>
  );
};
