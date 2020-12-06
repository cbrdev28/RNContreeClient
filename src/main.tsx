/**
 * This file is our main entry point in the code.
 */

// Required by React Navigation setup
import 'react-native-gesture-handler';

import React from 'react';
import { MainAppCtl } from './MainApp/MainAppController';

export const Main = () => {
  return <MainAppCtl />;
};
