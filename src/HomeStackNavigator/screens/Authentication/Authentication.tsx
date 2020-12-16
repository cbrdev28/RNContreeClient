/**
 * The view component for Authentication
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Messages } from '../../../resources/messages';
import { Color } from '../../../styling/colors';
import { FontSize } from '../../../styling/fonts';
import { Spacing } from '../../../styling/spacing';
import { Styling } from '../../../styling/styling';

export const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{Messages.authenticationHeader}</Text>

      <Text style={styles.inputLabel}>{Messages.authenticationEmailLabel}</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
      />

      <Text style={styles.inputLabel}>
        {Messages.authenticationPasswordLabel}
      </Text>
      <TextInput
        style={styles.inputText}
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <Button
        title={Messages.authLoginButtonTitle}
        disabled={!email || !password}
        onPress={() => {}}
      />

      <Text style={styles.inputLabel}>{Messages.authenticationNameLabel}</Text>
      <TextInput style={styles.inputText} onChangeText={setName} />

      <Button
        title={Messages.authSignUpButtonTitle}
        disabled={!name || !email || !password}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.contentInset,
  },
  header: {
    alignSelf: 'center',
    fontSize: FontSize.header,
    marginBottom: Spacing.verticalInset,
  },
  inputLabel: {
    marginBottom: Spacing.verticalStack,
  },
  inputText: {
    borderColor: Color.inputColor,
    borderWidth: Styling.borderWidth,
    borderRadius: Styling.borderRadius,
    padding: Spacing.inset,
    marginBottom: Spacing.verticalInset,
  },
});
