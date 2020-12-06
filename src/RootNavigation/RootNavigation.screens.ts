/**
 * This file defines the table to match each navigable
 * route to a screen/component
 */

import { ComponentType } from 'react';
import { Route } from './RootNavigation.routes';
import RNDemoApp from '../RNDemoApp/RNDemoApp';
import { DebugScreenContainer } from '../DebugScreen/DebugScreenContainer';

export const Screens: Record<Route, ComponentType<any>> = {
  DebugScreen: DebugScreenContainer,
  RNDemoApp: RNDemoApp,
};
