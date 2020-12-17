/**
 * Container for Authentication screen
 */

import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';

import {
  CreateUserMutationParams,
  CreateUserMutationResponse,
  gqlCreateUserMutation,
} from '../../../Network/mutations/createUserMutation';
import { Authentication } from './Authentication';
import { Messages } from '../../../resources/messages';

export const AuthenticationContainer = () => {
  const [createUserError, setCreateUserError] = useState('');
  const [createUser] = useMutation<
    CreateUserMutationResponse,
    CreateUserMutationParams
  >(gqlCreateUserMutation);

  const didTapCreateUser = useCallback(
    async ({ email, password, name }) => {
      try {
        await createUser({
          variables: {
            input: {
              name,
              credentials: { email, password },
            },
          },
        });
      } catch (error) {
        setCreateUserError(Messages.authError);
      }
    },
    [createUser, setCreateUserError],
  );

  return (
    <Authentication
      didTapCreateUser={didTapCreateUser}
      createUserError={createUserError}
    />
  );
};
