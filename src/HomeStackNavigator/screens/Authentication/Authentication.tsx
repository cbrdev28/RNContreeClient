/**
 * The view component for Authentication
 */

import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Messages } from '../../../resources/messages';
import { Color } from '../../../styling/colors';
import { FontSize } from '../../../styling/fonts';
import { Spacing } from '../../../styling/spacing';
import { Styling } from '../../../styling/styling';

export interface CreateUserCallbackParams {
  email: string;
  password: string;
  name: string;
}

export interface SignInUserCallbackParams {
  email: string;
  password: string;
}

interface AuthenticationProps {
  didTapCreateUser: (params: CreateUserCallbackParams) => Promise<void>;
  createUserError?: string;
  didTapSignInUser: (params: SignInUserCallbackParams) => Promise<void>;
  signInUserError?: string;
}

export const Authentication = (props: AuthenticationProps) => {
  const {
    didTapCreateUser,
    createUserError,
    didTapSignInUser,
    signInUserError,
  } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const didTapSignUp = useCallback(() => {
    didTapCreateUser({ email, password, name });
  }, [didTapCreateUser, email, password, name]);

  const didTapLogin = useCallback(() => {
    didTapSignInUser({ email, password });
  }, [didTapSignInUser, email, password]);

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
        onPress={didTapLogin}
      />
      <Text
        style={
          (signInUserError && [styles.errorPlaceholder, styles.error]) || [
            styles.errorPlaceholder,
          ]
        }>
        {signInUserError}
      </Text>

      <Text style={styles.inputLabel}>{Messages.authenticationNameLabel}</Text>
      <TextInput style={styles.inputText} onChangeText={setName} />

      <Button
        title={Messages.authSignUpButtonTitle}
        disabled={!name || !email || !password}
        onPress={didTapSignUp}
      />
      <Text
        style={
          (createUserError && [styles.errorPlaceholder, styles.error]) || [
            styles.errorPlaceholder,
          ]
        }>
        {createUserError}
      </Text>
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
    borderColor: Color.input,
    borderWidth: Styling.borderWidth,
    borderRadius: Styling.borderRadius,
    padding: Spacing.inset,
    marginBottom: Spacing.verticalInset,
  },
  errorPlaceholder: {
    alignSelf: 'center',
    color: Color.nothing,
  },
  error: {
    color: Color.error,
  },
});
