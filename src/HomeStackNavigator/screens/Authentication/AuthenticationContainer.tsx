/**
 * Container for Authentication screen
 */

import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';

import { Messages } from '../../../resources/messages';
import {
  CreateUserMutationParams,
  CreateUserMutationResponse,
  gqlCreateUserMutation,
} from '../../../Network/mutations/createUserMutation';
import {
  gqlSignInUserMutation,
  SignInUserMutationParams,
  SignInUserMutationResponse,
} from '../../../Network/mutations/signInUserMutation';
import { Authentication } from './Authentication';

export const AuthenticationContainer = () => {
  const [createUserError, setCreateUserError] = useState('');
  const [createUser] = useMutation<
    CreateUserMutationResponse,
    CreateUserMutationParams
  >(gqlCreateUserMutation);

  const [signInUserError, setSignInUserError] = useState('');
  const [signInUser] = useMutation<
    SignInUserMutationResponse,
    SignInUserMutationParams
  >(gqlSignInUserMutation);

  const didTapCreateUser = useCallback(
    async ({ email, password, name }) => {
      let createUserResponse = null;
      try {
        createUserResponse = await createUser({
          variables: {
            input: {
              name,
              credentials: { email, password },
            },
          },
        });
      } catch (_error) {
        setCreateUserError(Messages.authError);
        return;
      }

      const createdUser = createUserResponse?.data?.createUser?.user;
      if (!createdUser) {
        setCreateUserError(Messages.authError);
        return;
      }

      // Sign in user
      let signInUserResponse = null;
      try {
        signInUserResponse = await signInUser({
          variables: {
            input: {
              credentials: {
                email: createdUser.email,
                password: password,
              },
            },
          },
        });
      } catch (_error) {
        setSignInUserError(Messages.authError);
        return;
      }

      const authToken = signInUserResponse?.data?.signInUser?.token;
      const signedInUser = signInUserResponse?.data?.signInUser?.user;
      if (!authToken || !signedInUser) {
        setSignInUserError(Messages.authError);
        return;
      }

      // Set user and auth token in context
      setCreateUserError('Token: ' + authToken);
      setSignInUserError(
        'User: ' + signedInUser.email + ' / ' + signedInUser.name,
      );
    },
    [createUser, setCreateUserError, signInUser, setSignInUserError],
  );

  return (
    <Authentication
      didTapCreateUser={didTapCreateUser}
      createUserError={createUserError}
      signInUserError={signInUserError}
    />
  );
};
