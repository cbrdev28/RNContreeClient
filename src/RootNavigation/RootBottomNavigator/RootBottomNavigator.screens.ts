/**
 * This file defines the table to match each navigable
 * route to a container, for the bottom navigator.
 */

import { ComponentType } from 'react';

import RNDemoApp from '../../components/RNDemoApp/RNDemoApp';
import { DebugScreenContainer } from '../../components/DebugScreen/DebugScreenContainer';
import { RootBottomNavigatorRoutes } from './RootBottomNavigator.routes';
import { HomeStackNavigator } from '../../HomeStackNavigator/HomeStackNavigator';

export const RootBottomNavigatorScreens: Record<
  RootBottomNavigatorRoutes,
  ComponentType<any>
> = {
  debugScreen: DebugScreenContainer,
  rnDemoApp: RNDemoApp,
  home: HomeStackNavigator,
};
