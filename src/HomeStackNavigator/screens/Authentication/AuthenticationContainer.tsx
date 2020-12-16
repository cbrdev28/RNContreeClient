/**
 * Container for Authentication screen
 */

import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import {
  CreateUserMutationParams,
  CreateUserMutationResponse,
  gqlCreateUserMutation,
} from '../../../Network/mutations/createUserMutation';
import { Authentication } from './Authentication';

export const AuthenticationContainer = () => {
  const [createUser] = useMutation<
    CreateUserMutationResponse,
    CreateUserMutationParams
  >(gqlCreateUserMutation);

  const didTapCreateUser = useCallback(
    async ({ email, password, name }) => {
      // TODO: add try catch and handle error
      await createUser({
        variables: {
          input: {
            name,
            credentials: { email, password },
          },
        },
      });
    },
    [createUser],
  );

  return <Authentication didTapCreateUser={didTapCreateUser} />;
};
