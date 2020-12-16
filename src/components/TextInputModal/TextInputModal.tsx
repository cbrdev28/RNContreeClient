/**
 * The view component for a modal which shows a text input
 * with a button to submit.
 * And a way to dismiss the modal.
 */

import React, { useCallback, useState } from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Messages } from '../../resources/messages';
import { Color } from '../../styling/colors';
import { FontSize } from '../../styling/fonts';
import { Spacing } from '../../styling/spacing';
import { Styling } from '../../styling/styling';

interface TextInputModalProps {
  onDismiss: () => void;
  onSubmit: (text: string) => Promise<void>;
}

export const TextInputModal = (props: TextInputModalProps) => {
  const { onSubmit, onDismiss } = props;
  const [inputText, setInputText] = useState('');

  const onChangeText = useCallback((text: string) => {
    setInputText(text);
  }, []);

  const onSubmitText = useCallback(async () => {
    Keyboard.dismiss();
    await onSubmit(inputText);
  }, [onSubmit, inputText]);

  const onDismissModal = useCallback(() => {
    Keyboard.dismiss();
    onDismiss();
  }, [onDismiss]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{Messages.textInputModalTitle}</Text>
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
            <Text style={[styles.buttonText, styles.submitText]}>
              {Messages.textInputModalSubmitButton}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDismissModal}>
            <Text style={styles.buttonText}>
              {Messages.textInputModalDismissButton}
            </Text>
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
    paddingHorizontal: Spacing.largeInset,
  },
  content: {
    padding: Spacing.contentInset,
    backgroundColor: Color.modalBackground,
    ...Styling.modalShadow,
  },
  title: {
    fontSize: FontSize.header,
    marginBottom: Spacing.verticalContentInset,
  },
  textInput: {
    borderColor: Color.inputColor,
    borderWidth: Styling.borderWidth,
    borderRadius: Styling.borderRadius,
    padding: Spacing.inset,
    marginBottom: Spacing.verticalContentInset,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: Styling.borderWidth,
    borderRadius: Styling.borderRadius,
    paddingVertical: Spacing.inset,
    paddingHorizontal: Spacing.largeInset,
  },
  submitButton: {
    borderColor: Color.activeColor,
  },
  buttonText: {
    fontSize: FontSize.button,
  },
  submitText: {
    color: Color.activeColor,
  },
});
