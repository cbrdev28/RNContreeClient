/**
 * This file handles the root navigation of the app.
 * This is the entry point for users navigation, it installs
 * the whole navigation tree.
 */

import React from 'react';

import { RootBottomNavigator } from './RootBottomNavigator';

export const RootNavigationController = () => {
  return <RootBottomNavigator />;
};
