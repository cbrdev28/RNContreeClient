/**
 * View component to show a pair of label and value.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../../styling/colors';
import { Spacing } from '../../styling/spacing';
import { Styling } from '../../styling/styling';

interface LabelValueTextProps {
  label: string;
  value: string;
}

export const LabelValueText = (props: LabelValueTextProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Text>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomColor: Color.borderColor,
    borderBottomWidth: Styling.borderWidth,

    padding: Spacing.inset,
  },
});
