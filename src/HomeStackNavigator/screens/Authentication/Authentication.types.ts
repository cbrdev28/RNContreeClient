/**
 * Declare the types for the Authentication container navigation
 */

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootBottomNavigatorRoutes } from '../../../RootNavigation/RootBottomNavigator/RootBottomNavigator.routes';
import { BottomTabNavigatorParams } from '../../../RootNavigation/RootBottomNavigator/RootBottomNavigator.types';
import { RootNavigationRoutes } from '../../../RootNavigation/RootNavigation.routes';
import { RootModalStackNavigatorParams } from '../../../RootNavigation/RootNavigation.types';
import { HomeStackNavigatorRoutes } from '../../HomeStackNavigator.routes';
import { HomeStackNavigatorParams } from '../../HomeStackNavigator.types';

// Navigation prop
export type AuthenticationNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    RootModalStackNavigatorParams,
    RootNavigationRoutes.rootBottomNavigator
  >,
  CompositeNavigationProp<
    BottomTabNavigationProp<
      BottomTabNavigatorParams,
      RootBottomNavigatorRoutes.home
    >,
    StackNavigationProp<
      HomeStackNavigatorParams,
      HomeStackNavigatorRoutes.authentication
    >
  >
>;

// Route prop
export type AuthenticationRouteProp = RouteProp<
  HomeStackNavigatorParams,
  HomeStackNavigatorRoutes.authentication
>;

// This type can be used by the Authentication component props.
export type AuthenticationNavRouteProp = {
  route: AuthenticationRouteProp;
  navigation: AuthenticationNavigationProp;
};
