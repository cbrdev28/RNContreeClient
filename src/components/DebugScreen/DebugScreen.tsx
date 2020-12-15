/**
 * This file is the debug screen for our app and will be used
 * by the bottom tab navigator.
 * It's a placeholder to test code.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Messages } from '../../resources/messages';
import { LabelValueText } from './LabelValueText';

export interface DebugScreenProps {
  testNavParam: string;
  apolloServerUriFromContext: string;
  apolloServerUriDebugFromContext?: string | null;
  showModal: () => void;

  userToken: string | undefined;
  userId: number | undefined;
  userName: string | undefined;
  userEmail: string | undefined;
}

export const DebugScreen = (props: DebugScreenProps) => {
  return (
    <View style={styles.container}>
      <LabelValueText
        label={Messages.debugHelloLabel}
        value={Messages.debugHelloValue}
      />
      <LabelValueText
        label={Messages.debugTestNavParamLabel}
        value={props.testNavParam}
      />
      <LabelValueText
        label={Messages.debugUriLabel}
        value={props.apolloServerUriFromContext}
      />
      <LabelValueText
        label={Messages.debugUriDebugLabel}
        value={props.apolloServerUriDebugFromContext || ''}
      />
      <TouchableOpacity onPress={props.showModal}>
        <LabelValueText label={Messages.debugEditUriDebugButton} value={''} />
      </TouchableOpacity>
      <LabelValueText
        label={Messages.debugUserTokenLabel}
        value={props.userToken || ''}
      />
      <LabelValueText
        label={Messages.debugUserIdLabel}
        value={props.userId?.toString() || ''}
      />
      <LabelValueText
        label={Messages.debugUserNameLabel}
        value={props.userName || ''}
      />
      <LabelValueText
        label={Messages.debugUserEmailLabel}
        value={props.userEmail || ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
