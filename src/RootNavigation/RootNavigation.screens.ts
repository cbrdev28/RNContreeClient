/**
 * This file defines the table to match each navigable
 * route to a container, for the root navigation
 */

import { ComponentType } from 'react';
import { RootNavigationRoutes } from './RootNavigation.routes';

import RNDemoApp from '../RNDemoApp/RNDemoApp';
import { DebugScreenContainer } from '../DebugScreen/DebugScreenContainer';

export const RootNavigationScreens: Record<
  RootNavigationRoutes,
  ComponentType<any>
> = {
  DebugScreen: DebugScreenContainer,
  RNDemoApp: RNDemoApp,
};
