/**
 * The view component for Authentication
 */

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Messages } from '../../../resources/messages';
import { Color } from '../../../styling/colors';
import { FontSize } from '../../../styling/fonts';
import { Spacing } from '../../../styling/spacing';
import { Styling } from '../../../styling/styling';

export const Authentication = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{Messages.authenticationHeader}</Text>
      <Text style={styles.inputLabel}>{Messages.authenticationEmailLabel}</Text>
      <TextInput style={styles.inputText} />
      <Text style={styles.inputLabel}>
        {Messages.authenticationPasswordLabel}
      </Text>
      <TextInput style={styles.inputText} secureTextEntry={true} />
      <Button title={Messages.authLoginButtonTitle} onPress={() => {}} />
      <Text style={styles.inputLabel}>{Messages.authenticationNameLabel}</Text>
      <TextInput style={styles.inputText} />
      <Button title={Messages.authSignUpButtonTitle} onPress={() => {}} />
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
