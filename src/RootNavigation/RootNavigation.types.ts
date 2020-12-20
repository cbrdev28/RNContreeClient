/**
 * This file contains the type definition for each screens
 * we add in the root navigation tree.
 * This helps provide type checking for navigation & route props
 * which are automatically passed by react navigation to our screens.
 */

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigationRoutes } from './RootNavigation.routes';

export type RootModalStackNavigatorParams = {
  [RootNavigationRoutes.rootBottomNavigator]: undefined;
  [RootNavigationRoutes.textInputModal]: undefined;
};

// Define route type for the text input modal container
type TextInputModalRouteProp = RouteProp<
  RootModalStackNavigatorParams,
  RootNavigationRoutes.textInputModal
>;

// Define navigation type for the text input modal container
type TextInputModalNavProp = StackNavigationProp<
  RootModalStackNavigatorParams,
  RootNavigationRoutes.textInputModal
>;

// Type to be used by TextInputModalContainer props
export type TextInputModalNavRouteProp = {
  route: TextInputModalRouteProp;
  navigation: TextInputModalNavProp;
};
