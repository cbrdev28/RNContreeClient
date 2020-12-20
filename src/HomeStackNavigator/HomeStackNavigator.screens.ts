/**
 * Declare which container/component matches with a route for home stack navigator.
 */

import { ComponentType } from 'react';
import { HomeStackNavigatorRoutes } from './HomeStackNavigator.routes';
import { AuthenticationContainer } from './screens/Authentication/AuthenticationContainer';
import { WelcomeContainer } from './screens/Welcome/WelcomeContainer';

export const HomeStackNavigatorScreens: Record<
  HomeStackNavigatorRoutes,
  ComponentType<any>
> = {
  welcome: WelcomeContainer,
  authentication: AuthenticationContainer,
};
