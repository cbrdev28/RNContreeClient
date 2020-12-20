/**
 * Declare the types for home stack navigator and the types of each
 * screen nav params.
 */

import { HomeStackNavigatorRoutes } from './HomeStackNavigator.routes';

// Authentication nav params
interface AuthenticationNavParams {}

// Welcome nav params
interface WelcomeNavParams {}

// Typing for home stack navigator
export type HomeStackNavigatorParams = {
  [HomeStackNavigatorRoutes.authentication]: AuthenticationNavParams;
  [HomeStackNavigatorRoutes.welcome]: WelcomeNavParams;
};
