/**
 * This file is the controller for the debug screen
 */

import React from 'react';
import { DebugScreen, DebugScreenProps } from './DebugScreen';

interface DebugScreenControllerProps extends DebugScreenProps {}

export const DebugScreenController = (props: DebugScreenControllerProps) => {
  return <DebugScreen {...props} />;
};
