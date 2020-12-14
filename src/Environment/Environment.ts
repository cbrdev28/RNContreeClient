/**
 * Declare our Environment object which will
 * be provided in the React Context.
 */

export interface Environment {
  // The default server uri for apollo, hard coded
  apolloServerUri: string;

  // A debug server uri for apollo, which will be used
  // instead of the default, if set
  apolloServerUriDebug?: string | null;
  // A way to update the debug server uri for apollo
  setApolloServerUriDebug: (debugUri: string) => Promise<void>;
}
