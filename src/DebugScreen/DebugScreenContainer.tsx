/**
 * This file is the container for the debug screen
 */

import React from 'react';
import { DebugScreenNavRouteProp } from '../RootNavigation/RootNavigation.types';
import { DebugScreen } from './DebugScreen';

export const DebugScreenContainer = ({
  route,
  navigation,
}: DebugScreenNavRouteProp) => {
  const { testNavParam } = route.params;
  return <DebugScreen testNavParam={testNavParam} />;
};
