/**
 * This file is the debug screen for our app and will be used
 * by the bottom tab navigator.
 * It's a placeholder to test code.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface DebugScreenProps {
  testNavParam: string;
  apolloServerUriFromContext: string;
  apolloServerUriDebugFromContext?: string | null;
}

export const DebugScreen = (props: DebugScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Hello Debug Screen 2</Text>
      <Text>Test nav param: {props.testNavParam}</Text>
      <Text>URI: {props.apolloServerUriFromContext}</Text>
      <Text>
        Debug URI:
        {props.apolloServerUriDebugFromContext}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
