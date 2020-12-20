/**
 * Schema for user credentials input
 */

import { gql } from '@apollo/client';

export interface CredentialsInput {
  email: string;
  password: string;
}

export const gqlCredentialsInputDefs = gql`
  type CredentialsInput {
    email: String!
    password: String!
  }
`;
