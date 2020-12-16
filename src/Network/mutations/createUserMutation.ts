/**
 * Declare the mutation to create user
 */

import { gql } from '@apollo/client';
import { CredentialsInput } from '../schema.types.ts/CredentialsInput';
import { User } from '../schema.types.ts/User';

export interface CreateUserInput {
  name: string;
  credentials: CredentialsInput;
}

export const gqlCreateUserInputDefs = gql`
  input CreateUserInput {
    name: String!
    credentials: CredentialsInput!
  }
`;

export interface CreateUserMutationParams {
  input: CreateUserInput;
}
export interface CreateUserMutationResponse {
  createUser: {
    user: User;
  };
}

export const gqlCreateUserMutationDefs = gql`
  type Query {
    createUser(input: CreateUserInput!): User!
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
