/**
 * The view component for Authentication
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Messages } from '../../../resources/messages';
import { FontSize } from '../../../styling/fonts';
import { Spacing } from '../../../styling/spacing';

export const Authentication = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{Messages.authenticationHeader}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.contentInset,
  },
  header: {
    fontSize: FontSize.header,
  },
});
