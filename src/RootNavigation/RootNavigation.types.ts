/**
 * This file contains the type definition for each screens
 * we add in the root navigation tree.
 * This helps provide type checking for navigation & route props
 * which are automatically passed by react navigation to our screens.
 */

import { RootNavigationRoutes } from './RootNavigation.routes';

export type RootModalStackNavigatorParams = {
  [RootNavigationRoutes.RootBottomNavigator]: undefined;
};
