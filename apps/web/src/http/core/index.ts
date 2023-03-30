import { HttpError } from '@supercarmarket/lib';
import axios, {
  AxiosResponse,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios';
import { getSession } from 'next-auth/react';

const authRequest: AxiosInstance = axios.create({
  baseURL: `/server/supercar/v1`,
});

const setRequest = async (
  config: AxiosRequestConfig,
  contentType = 'application/json'
) => {
  const session = await getSession();

  if (!session?.accessToken) throw 'require logged in';

  if (config && config.headers)
    config.headers = {
      ACCESS_TOKEN: `${session.accessToken}`,
      ContentType: contentType,
    };

  return config;
};

const setResponse = async (response: AxiosResponse) => {
  return response.data;
};

// API 통신 직전 쿠키에 있는 값으로 헤더를 세팅
authRequest.interceptors.request.use(setRequest);
authRequest.interceptors.response.use(setResponse, (error) => {
  const { request, response } = error;
  const errorJson = response.data;

  return HttpError.fromRequest(request, {
    ...response,
    statusText: errorJson.message || response.statusText,
  });
});

export { authRequest };
