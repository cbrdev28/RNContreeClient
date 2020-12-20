/**
 * Declare the recover session query
 */

import { gql } from '@apollo/client';
import { User } from '../schema.types.ts/User';

export const gqlRecoverSessionResponseDefs = gql`
  type RecoverSessionResponse {
    token: String
    user: User
  }
`;
export const gqlRecoverSessionQueryDefs = gql`
  type Query {
    recoverSession(authToken: String!): RecoverSessionResponse
  }
`;

export const gqlRecoverSessionQuery = gql`
  query RecoverSession($authToken: String!) {
    recoverSession(authToken: $authToken) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

interface RecoverSessionResponse {
  token?: string;
  user?: User;
}
export interface RecoverSessionQueryParams {
  authToken: string;
}
export interface RecoverSessionQueryResponse {
  recoverSession?: RecoverSessionResponse;
}
