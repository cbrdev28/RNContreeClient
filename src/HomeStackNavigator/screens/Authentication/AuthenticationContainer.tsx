/**
 * Container for Authentication screen
 * - If the auth token is found in the environment then
 *   it will attempt to recover the user session
 * - Otherwise it shows a form to authenticate
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
import {
  Authentication,
  CreateUserCallbackParams,
  SignInUserCallbackParams,
} from './Authentication';
import { useEnvironmentContext } from '../../../MainApp/EnvironmentContext/EnvironmentContextProvider';
import { RecoverSessionController } from './RecoverSessionController';

export const AuthenticationContainer = () => {
  const envContext = useEnvironmentContext();
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

  const didTapSignInUser = useCallback(
    async ({ email, password }: SignInUserCallbackParams) => {
      // Clear any errors
      setSignInUserError('');

      let signInUserResponse = null;
      try {
        signInUserResponse = await signInUser({
          variables: {
            input: {
              credentials: {
                email: email,
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

      // This will update the React Context and re-render the home
      // navigation, to show the welcome screen instead of authentication
      await envContext.setCurrentUserSession(signedInUser, authToken);
      return;
    },
    [setSignInUserError, signInUser, envContext],
  );

  const didTapCreateUser = useCallback(
    async ({ email, password, name }: CreateUserCallbackParams) => {
      // Clear any errors
      setCreateUserError('');
      setSignInUserError('');

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

      await didTapSignInUser({ email: createdUser.email, password });
      return;
    },
    [createUser, setCreateUserError, setSignInUserError, didTapSignInUser],
  );

  if (!envContext.authToken) {
    return (
      <Authentication
        didTapCreateUser={didTapCreateUser}
        createUserError={createUserError}
        didTapSignInUser={didTapSignInUser}
        signInUserError={signInUserError}
      />
    );
  } else {
    return <RecoverSessionController authToken={envContext.authToken} />;
  }
};
