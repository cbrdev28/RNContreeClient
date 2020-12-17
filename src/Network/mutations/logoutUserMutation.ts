/**
 * Declare the mutation for users to logout
 */

import { gql } from '@apollo/client';

export const gqlEmptyTypeDefs = gql`
  type Empty {
    _: Boolean
  }
`;
export const gqlEmptyInputDefs = gql`
  input EmptyInput {
    _: Boolean
  }
`;
export const gqlLogoutUserMutationDefs = gql`
  type Mutation {
    logoutUser(input: EmptyInput): Empty
  }
`;

export const gqlLogoutUserMutation = gql`
  mutation LogoutUser($input: EmptyInput) {
    logoutUser(input: $input) {
      _
    }
  }
`;
