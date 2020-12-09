/**
 * The view component for a modal which shows a text input
 * with a button to submit.
 * And a way to dismiss the modal.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TextInputModalProps {
  onDismiss: () => void;
}

export const TextInputModal = (props: TextInputModalProps) => {
  return (
    <View style={styles.container}>
      <Text>Modal title</Text>
      <Text>Modal message is usually longer than a few words</Text>
      <TouchableOpacity>
        <Text>Submit button title</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onDismiss}>
        <Text>Dismiss button title</Text>
      </TouchableOpacity>
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
