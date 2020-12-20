/**
 * Declare some common styling usage
 */

import { Color } from './colors';

export namespace Styling {
  export const borderRadius = 4;
  export const borderWidth = 1;

  export const modalShadow = {
    shadowColor: Color.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  };
}
