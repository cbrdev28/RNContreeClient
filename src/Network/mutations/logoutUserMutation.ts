/**
 * Declare the mutation for users to logout
 */

import { gql } from '@apollo/client';

export const gqlLogoutUserMutationDefs = gql`
  type Mutation {
    logoutUser(input: _): _
  }
`;

export const gqlLogoutUserMutation = gql`
  mutation LogoutUser {
    logoutUser(input: {}) {
      clientMutationId
    }
  }
`;
