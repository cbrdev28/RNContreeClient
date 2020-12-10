/**
 * The view component for a modal which shows a text input
 * with a button to submit.
 * And a way to dismiss the modal.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

interface TextInputModalProps {
  onDismiss: () => void;
}

export const TextInputModal = (props: TextInputModalProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Enter server URI:</Text>
        <TextInput style={styles.textInput} />
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, styles.submitButton]}>
            <Text style={[styles.buttonText, styles.submitText]}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={props.onDismiss}>
            <Text style={styles.buttonText}>Dismiss</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  content: {
    padding: 16,
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
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  textInput: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  submitButton: {
    borderColor: 'green',
  },
  buttonText: {
    fontSize: 16,
  },
  submitText: {
    color: 'green',
  },
});
