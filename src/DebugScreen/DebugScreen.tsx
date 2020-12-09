/**
 * This file is the debug screen for our app and will be used
 * by the bottom tab navigator.
 * It's a placeholder to test code.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LabelValueText } from './LabelValueText';

export interface DebugScreenProps {
  testNavParam: string;
  apolloServerUriFromContext: string;
  apolloServerUriDebugFromContext?: string | null;
  showModal: () => void;
}

export const DebugScreen = (props: DebugScreenProps) => {
  return (
    <View style={styles.container}>
      <LabelValueText label={'Hello'} value={'Debug'} />
      <LabelValueText label={'Test nav param'} value={props.testNavParam} />
      <LabelValueText label={'URI'} value={props.apolloServerUriFromContext} />
      <LabelValueText
        label={'Debug URI'}
        value={props.apolloServerUriDebugFromContext || ''}
      />
      <TouchableOpacity onPress={props.showModal}>
        <LabelValueText label={'Show modal'} value={''} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
