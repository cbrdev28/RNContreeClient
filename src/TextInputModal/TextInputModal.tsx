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
      <View style={styles.content}>
        <Text>Modal title</Text>
        <Text>Modal message is usually longer than a few words</Text>
        <TouchableOpacity>
          <Text>Submit button title</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onDismiss}>
          <Text>Dismiss button title</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 8,

    backgroundColor: 'white',

    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
});
