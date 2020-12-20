/**
 * This shows a large loading indicator taking the full screen
 */

import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

export const FullScreenLoadingIndicator = () => {
  return <ActivityIndicator style={styles.loadingIndicator} size="large" />;
};

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
  },
});
