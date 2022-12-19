import type { NextApiHandler } from 'next';
import type { Params } from 'types/base';
import { catchNoExist, getErrorMessage } from 'utils/misc';

import { baseFetcher } from '../fetcher';

const requestPhoneAuthApi: NextApiHandler = async (req, res) => {
  const { phone } = req.query as Params;

  catchNoExist(phone);

  try {
    const authNumber = await baseFetcher(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/supercar/v1/message/auth/send/${phone}`,
      {
        method: 'GET',
      }
    );

    return res.status(200).json(authNumber);
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

const requestPhoneAuthWithNameApi: NextApiHandler = async (req, res) => {
  const { phone, name } = req.query as Params;

  catchNoExist();

  try {
    const authNumber = await baseFetcher(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/supercar/v1/message/auth/sendName/${phone}/${name}`,
      {
        method: 'GET',
      }
    );
    return res.status(200).json(authNumber);
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

const confirmPhoneAuthApi: NextApiHandler = async (req, res) => {
  const { phone, authorization } = req.query as Params;

  catchNoExist(phone, authorization);

  try {
    const authNumber = await baseFetcher(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/supercar/v1/message/auth/code/${phone}`,
      {
        method: 'GET',
        query: {
          code: authorization,
        },
      }
    );

    return res.status(200).json(authNumber);
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export {
  confirmPhoneAuthApi,
  requestPhoneAuthApi,
  requestPhoneAuthWithNameApi,
};