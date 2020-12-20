/**
 * Schema for user object
 */

import { gql } from '@apollo/client';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const qglUserDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
`;
