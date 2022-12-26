import type { Action } from 'feature';
import type { AuthAction, AuthInitialState } from 'feature/authProvider';

import { createAsyncHandler } from '.';

<<<<<<< HEAD
const signUpHandler = createAsyncHandler<AuthAction, AuthInitialState>(
  'SIGNUP_AUTH',
  'signup'
);

const signInHandler = createAsyncHandler<AuthAction, AuthInitialState>(
  'SIGNIN_AUTH',
  'signin'
);

const requestPhoneAuthHandler = createAsyncHandler<
  AuthAction,
  AuthInitialState
>('REQUEST_PHONE_AUTH', 'phone');

const confirmPhoneAuthHandler = createAsyncHandler<
  AuthAction,
  AuthInitialState
>('CONFIRM_PHONE_AUTH', 'authentication');

const duplicateIdAuthHandler = createAsyncHandler<AuthAction, AuthInitialState>(
  'DUPLICATE_ID_AUTH',
  'id'
);

const duplicateEmailAuthHandler = createAsyncHandler<
  AuthAction,
  AuthInitialState
>('DUPLICATE_EMAIL_AUTH', 'email');

const duplicateNicknameAuthHandler = createAsyncHandler<
  AuthAction,
  AuthInitialState
>('DUPLICATE_NICKNAME_AUTH', 'nickname');

=======
const authHandler = createAsyncHandler<AuthAction, AuthInitialState>(
  'REQUEST_AUTH',
  'authorization'
);

>>>>>>> 45c355dfdce16a4132d1d52bd9d7eabb4caf0864
export default function authReducer(
  state: AuthInitialState,
  action: Action<AuthAction>
) {
  switch (action.type) {
<<<<<<< HEAD
    case 'REQUEST_PHONE_AUTH':
    case 'REQUEST_PHONE_AUTH_SUCCESS':
    case 'REQUEST_PHONE_AUTH_ERROR':
      return requestPhoneAuthHandler(state, action);
    case 'CONFIRM_PHONE_AUTH':
    case 'CONFIRM_PHONE_AUTH_SUCCESS':
    case 'CONFIRM_PHONE_AUTH_ERROR':
      return confirmPhoneAuthHandler(state, action);
    case 'DUPLICATE_ID_AUTH':
    case 'DUPLICATE_ID_AUTH_SUCCESS':
    case 'DUPLICATE_ID_AUTH_ERROR':
      return duplicateIdAuthHandler(state, action);
    case 'DUPLICATE_EMAIL_AUTH':
    case 'DUPLICATE_EMAIL_AUTH_SUCCESS':
    case 'DUPLICATE_EMAIL_AUTH_ERROR':
      return duplicateEmailAuthHandler(state, action);
    case 'DUPLICATE_NICKNAME_AUTH':
    case 'DUPLICATE_NICKNAME_AUTH_SUCCESS':
    case 'DUPLICATE_NICKNAME_AUTH_ERROR':
      return duplicateNicknameAuthHandler(state, action);
    case 'SIGNUP_AUTH':
    case 'SIGNUP_AUTH_SUCCESS':
    case 'SIGNUP_AUTH_ERROR':
      return signUpHandler(state, action);
    case 'SIGNIN_AUTH':
    case 'SIGNIN_AUTH_SUCCESS':
    case 'SIGNIN_AUTH_ERROR':
      return signInHandler(state, action);
=======
    case 'REQUEST_AUTH':
    case 'REQUEST_AUTH_SUCCESS':
    case 'REQUEST_AUTH_ERROR':
      return authHandler(state, action);
    case 'CONFIRM_AUTH':
    case 'CONFIRM_AUTH_SUCCESS':
    case 'CONFIRM_AUTH_ERROR':
      return authHandler(state, action);
>>>>>>> 45c355dfdce16a4132d1d52bd9d7eabb4caf0864
    default:
      throw new Error(`Unhanded action type`);
  }
}
