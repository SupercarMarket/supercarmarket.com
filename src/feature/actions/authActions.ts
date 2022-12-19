import { phone } from 'utils/api/auth';

import createAsyncDispatcher from '.';

const requestAuthNumber = createAsyncDispatcher<'REQUEST_AUTH', string>(
  'REQUEST_AUTH',
  phone.requestAuthNumber
);

export { requestAuthNumber };