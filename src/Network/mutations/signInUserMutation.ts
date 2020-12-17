/**
 * Declare the mutation to sign in user
 */

import { gql } from '@apollo/client';
import { CredentialsInput } from '../schema.types.ts/CredentialsInput';
import { User } from '../schema.types.ts/User';

export const gqlSignInUserInputDefs = gql`
  input SignInUserInput {
    credentials: CredentialsInput!
  }
`;
export const gqlSignInUserPayloadDefs = gql`
  type SignInUserPayload {
    token: String!
    user: User!
  }
`;
export const gqlSignInUserMutationDefs = gql`
  type Mutation {
    signInUser(input: SignInUserInput!): SignInUserPayload!
  }
`;

export const gqlSignInUserMutation = gql`
  mutation SignInUser($input: SignInUserInput!) {
    signInUser(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

interface SignInUserInput {
  credentials: CredentialsInput;
}
interface SignInUserPayload {
  token: string;
  user: User;
}
export interface SignInUserMutationParams {
  input: SignInUserInput;
}
export interface SignInUserMutationResponse {
  signInUser: SignInUserPayload;
}
