/**
 * This file is the debug screen for our app and will be used
 * by the bottom tab navigator.
 * It's a placeholder to test code.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const DebugScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Debug Screen 2</Text>
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
