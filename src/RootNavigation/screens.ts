/**
 * This file defines the table to match each navigable
 * route to a screen/component
 */

import { ComponentType } from 'react';
import { Route } from './RootNavigation.routes';
import { DebugScreen } from '../DebugScreen/DebugScreen';
import RNDemoApp from '../RNDemoApp/RNDemoApp';

export const Screens: Record<Route, ComponentType<any>> = {
  DebugScreen: DebugScreen,
  RNDemoApp: RNDemoApp,
};
