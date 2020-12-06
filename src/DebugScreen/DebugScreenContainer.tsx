/**
 * This file is the container for the debug screen
 */

import React from 'react';
import { DebugScreenNavRouteProp } from '../RootNavigation/RootNavigation.types';
import { DebugScreenController } from './DebugScreenController';

export const DebugScreenContainer = ({
  route,
  navigation,
}: DebugScreenNavRouteProp) => {
  const { testNavParam } = route.params;
  return <DebugScreenController testNavParam={testNavParam} />;
};
