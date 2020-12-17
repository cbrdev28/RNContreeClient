/**
 * Declare the mutation to create user
 */

import { gql } from '@apollo/client';
import { CredentialsInput } from '../schema.types.ts/CredentialsInput';
import { User } from '../schema.types.ts/User';

export const gqlCreateUserInputDefs = gql`
  input CreateUserInput {
    name: String!
    credentials: CredentialsInput!
  }
`;
export const gqlCreateUserPayloadDefs = gql`
  type CreateUserPayload {
    user: User!
  }
`;
export const gqlCreateUserMutationDefs = gql`
  type Mutation {
    createUser(input: CreateUserInput!): CreateUserPayload!
  }
`;

export const gqlCreateUserMutation = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        name
        email
      }
    }
  }
`;

interface CreateUserInput {
  name: string;
  credentials: CredentialsInput;
}
interface CreateUserPayload {
  user: User;
}
export interface CreateUserMutationParams {
  input: CreateUserInput;
}
export interface CreateUserMutationResponse {
  createUser: CreateUserPayload;
}
