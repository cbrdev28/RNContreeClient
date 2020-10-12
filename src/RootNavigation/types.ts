/**
 * This file contains the type definition for each screens
 * we add in the navigation tree.
 * This helps provide type checking for navigation & route props
 * which are automatically passed by react navigation to our screens.
 */

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { Route } from './routes';

/**
 * For each route of the bottom tab navigator
 * we define the type of their params.
 * We only try that with our Debug Screen.
 */
interface DebugScreenNavParams {
  testNavParam: string;
}

/**
 * The BottomTabNavigator from react navigation will
 * use this type definition for each screen.
 * This provides type checking for nav params
 */
export type BottomTabNavigatorParams = {
  [Route.DebugScreen]: DebugScreenNavParams;
  // The React Native demo app will not have any params
  [Route.RNDemoApp]: undefined;
};

/**
 * For each screen of the bottom tab navigator
 * we define the type of their route prop.
 * The route prop are automatically passed by
 * react navigation when adding a screen.
 */
export type DebugScreenRouteProp = RouteProp<
  BottomTabNavigatorParams,
  Route.DebugScreen
>;

/**
 * For each screen of the bottom tab navigator
 * we define the type of their navigation prop.
 * The navigation prop are automatically passed by
 * react navigation when adding a screen.
 */
export type DebugScreenNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParams,
  Route.DebugScreen
>;

/**
 * This type can be used by the DebugScreen component
 */
export type DebugScreenNavRouteProp = {
  route: DebugScreenRouteProp;
  navigation: DebugScreenNavigationProp;
};
