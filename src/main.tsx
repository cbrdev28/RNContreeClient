/**
 * This file is our main entry point in the code.
 */

// Required by React Navigation setup
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainAppCtl } from './MainApp/MainAppCtl';

export const Main = () => {
  return (
    <NavigationContainer>
      <MainAppCtl />
    </NavigationContainer>
  );
};
