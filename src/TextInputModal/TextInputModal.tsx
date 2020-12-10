/**
 * The view component for a modal which shows a text input
 * with a button to submit.
 * And a way to dismiss the modal.
 */

import React, { useCallback, useState } from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TextInputModalProps {
  onDismiss: () => void;
  onSubmit: (text: string) => void;
}

export const TextInputModal = (props: TextInputModalProps) => {
  const { onSubmit, onDismiss } = props;
  const [inputText, setInputText] = useState('');

  const onChangeText = useCallback((text: string) => {
    setInputText(text);
  }, []);

  const onSubmitText = useCallback(() => {
    Keyboard.dismiss();
    onSubmit(inputText);
  }, [onSubmit, inputText]);

  const onDismissModal = useCallback(() => {
    Keyboard.dismiss();
    onDismiss();
  }, [onDismiss]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Enter server URI:</Text>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={onChangeText}
          autoCapitalize={'none'}
          autoCorrect={false}

          // This shows an error/warning in the Xcode console
          // 2020-12-10 07:50:20.202027-0800 RNContreeClient[3609:114892] [Common] _BSMachError: port d533; (os/kern) invalid capability (0x14) "Unable to insert COPY_SEND"
          // Basically we need to properly show/dismiss the keyboard, from what I investigated
          // autoFocus={true}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={onSubmitText}>
            <Text style={[styles.buttonText, styles.submitText]}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDismissModal}>
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
