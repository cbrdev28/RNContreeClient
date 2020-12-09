/**
 * This file defines the table to match each navigable
 * route to a container, for the root navigation (modals & other navigators).
 */

import { ComponentType } from 'react';
import { RootNavigationRoutes } from './RootNavigation.routes';

import { RootBottomNavigator } from './RootBottomNavigator/RootBottomNavigator';

export const RootNavigationScreens: Record<
  RootNavigationRoutes,
  ComponentType<any>
> = {
  RootBottomNavigator: RootBottomNavigator,
};
