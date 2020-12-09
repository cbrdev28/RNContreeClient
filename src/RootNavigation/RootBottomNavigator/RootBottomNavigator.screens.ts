/**
 * This file defines the table to match each navigable
 * route to a container, for the bottom navigator.
 */

import { ComponentType } from 'react';

import RNDemoApp from '../../RNDemoApp/RNDemoApp';
import { DebugScreenContainer } from '../../DebugScreen/DebugScreenContainer';
import { RootBottomNavigatorRoutes } from './RootBottomNavigator.routes';

export const RootBottomNavigatorScreens: Record<
  RootBottomNavigatorRoutes,
  ComponentType<any>
> = {
  DebugScreen: DebugScreenContainer,
  RNDemoApp: RNDemoApp,
};
