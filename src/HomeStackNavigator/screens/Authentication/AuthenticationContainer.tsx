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

  const didTapCreateUser = useCallback(async () => {
    console.warn('Calling');
    const response = await createUser({
      variables: {
        input: {
          name: 'Hardcoded',
          credentials: { email: 'Hard2@coded.com', password: 'HARDCODED' },
        },
      },
    });
    console.warn(
      'Response data: ',
      JSON.stringify(response?.data?.createUser?.user),
    );
  }, [createUser]);

  return <Authentication didTapCreateUser={didTapCreateUser} />;
};
