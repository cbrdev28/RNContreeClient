/**
 * This file contains the type definition for each screens
 * we add in the bottom navigator.
 * This helps provide type checking for navigation & route props
 * which are automatically passed by react navigation to our screens.
 */

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { RootBottomNavigatorRoutes } from './RootBottomNavigator.routes';

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
 * This provides type checking for nav params.
 */
export type BottomTabNavigatorParams = {
  [RootBottomNavigatorRoutes.DebugScreen]: DebugScreenNavParams;
  // The React Native demo app will not have any params
  [RootBottomNavigatorRoutes.RNDemoApp]: undefined;
};

/**
 * For each screen of the bottom tab navigator
 * we define the type of their route prop.
 * The route prop are automatically passed by
 * react navigation when adding a screen.
 */
type DebugScreenRouteProp = RouteProp<
  BottomTabNavigatorParams,
  RootBottomNavigatorRoutes.DebugScreen
>;

/**
 * For each screen of the bottom tab navigator
 * we define the type of their navigation prop.
 * The navigation prop are automatically passed by
 * react navigation when adding a screen.
 */
type DebugScreenNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParams,
  RootBottomNavigatorRoutes.DebugScreen
>;

/**
 * This type can be used by the DebugScreen component props.
 */
export type DebugScreenNavRouteProp = {
  route: DebugScreenRouteProp;
  navigation: DebugScreenNavigationProp;
};
