/**
 * Declare our Environment object which will
 * be provided in the React Context.
 */

import { User } from '../Network/schema.types.ts/User';

export interface Environment {
  // The default server uri for apollo, hard coded
  apolloServerUri: string;
  // The current user: set if logged in, null otherwise
  currentUser: User | null;

  // A debug server uri for apollo, which will be used
  // instead of the default, if set
  apolloServerUriDebug?: string | null;
  // A way to update the debug server uri for apollo
  setApolloServerUriDebug: (debugUri: string) => Promise<void>;
}
