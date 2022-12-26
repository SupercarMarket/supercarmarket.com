<<<<<<< HEAD
'use client';

import Button from 'components/common/button';
import { Form, FormLabel } from 'components/common/form';
import auth from 'constants/auth';
import { signUp } from 'feature/actions/authActions';
import {
  AuthProvider,
  useAuthDispatch,
  useAuthState,
} from 'feature/authProvider';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { catchNoExist } from 'utils/misc';

import AuthFormItem from '../authFormItem/authFormItem';
import * as style from './signupForm.styled';
=======
import Button from 'components/common/button';
import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { user } from 'utils/api/auth';

import type { Forms } from '../authFormItem/authFormItem';
import AuthFormContainer from '../authFormItem/authFormItem';
import { Form } from './signupForm.styled';

const forms: Forms[] = [
  {
    htmlFor: 'id',
    label: '아이디',
    type: 'text',
    placeholder: '아이디를 입력해주세요',
    button: '중복 확인',
    buttonWidth: '140px',
    options: {
      required: true,
    },
    errorMessage: '사용 불가능한 아이디입니다',
    successMessage: '사용 가능한 아이디입니다',
  },
  {
    htmlFor: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    tooltip: '영문/숫자/특수문자 중 2가지 이상, 8자 이상',
    options: {
      required: true,
    },
  },
  {
    htmlFor: 'passwordConfirm',
    label: '비밀번호 확인',
    type: 'password',
    placeholder: '비밀번호를 한번 더 입력해주세요',
    options: {
      required: true,
    },
  },
  {
    htmlFor: 'name',
    label: '이름',
    type: 'text',
    placeholder: '이름을 입력해주세요',
    options: {
      required: true,
    },
  },
  {
    htmlFor: 'nickname',
    label: '닉네임',
    type: 'text',
    placeholder: '닉네임을 입력해주세요 (최대 10자)',
    tooltip: '2~10자 한글, 영문 대소문자를 사용할 수 있습니다',
    button: '중복 확인',
    buttonWidth: '140px',
    options: {
      required: true,
    },
    errorMessage: '사용 불가능한 닉네임입니다',
    successMessage: '사용 가능한 닉네임입니다',
  },
  {
    htmlFor: 'phone',
    label: '휴대폰',
    type: 'text',
    placeholder: '숫자만 입력해주세요',
    button: '인증번호 받기',
    buttonWidth: '120px',
    options: {
      required: true,
    },
  },
  {
    htmlFor: 'authentication',
    label: '인증번호',
    type: 'text',
    placeholder: '인증번호를 입력해주세요',
    button: '인증번호 확인',
    buttonWidth: '120px',
    options: {
      required: true,
    },
  },
  {
    htmlFor: 'email',
    label: '이메일',
    type: 'email',
    placeholder: '이메일을 입력해주세요',
    button: '중복 확인',
    buttonWidth: '140px',
    options: {
      required: true,
    },
    errorMessage: '사용 불가능한 이메일입니다',
    successMessage: '사용 가능한 이메일입니다',
  },
];
>>>>>>> 45c355dfdce16a4132d1d52bd9d7eabb4caf0864

interface FormState {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  nickname: string;
  phone: string;
  authentication: string;
  email: string;
}

const SignupForm = () => {
<<<<<<< HEAD
  const { replace } = useRouter();
  const methods = useForm<FormState>();
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  const onSubmit = React.useCallback(
    (data: FormState) => {
      catchNoExist(
        state.authentication.data,
        state.email.data,
        state.id.data,
        state.nickname.data,
        state.phone.data
      );
      signUp(dispatch, data);
    },
    [
      dispatch,
      state.authentication.data,
      state.email.data,
      state.id.data,
      state.nickname.data,
      state.phone.data,
    ]
  );

  React.useEffect(() => {
    if (state.signup.data) return replace('/');
  }, [replace, state.signup.data]);

  return (
    <AuthProvider>
      <FormProvider {...methods}>
        <Form css={style.form} onSubmit={methods.handleSubmit(onSubmit)}>
          {auth.signup().map((props) => (
            <FormLabel
              key={props.htmlFor}
              name={props.htmlFor}
              label={props.label}
            >
              <AuthFormItem state={state} dispatch={dispatch} {...props} />
            </FormLabel>
          ))}
          <Button width="340px" type="submit" variant="Primary">
            가입하기
          </Button>
        </Form>
      </FormProvider>
    </AuthProvider>
=======
  const methods = useForm<FormState>();

  const onSubmit = methods.handleSubmit(async (data) => {
    await user.signUp(data);
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>
        {forms.map((props) => (
          <AuthFormContainer key={props.label} {...props} />
        ))}
        <Button width="340px" type="submit" variant="Primary">
          가입하기
        </Button>
      </Form>
    </FormProvider>
>>>>>>> 45c355dfdce16a4132d1d52bd9d7eabb4caf0864
  );
};

export default SignupForm;
