import { applyMediaQuery, Container, Wrapper } from '@supercarmarket/ui';
import { BaseApiHandlerResponse } from '@supercarmarket/lib';
import type { Profile as ProfileType } from '@supercarmarket/types/account';
import type { Params, NextPageWithLayout } from '@supercarmarket/types/base';
import { AccountCategory, Profile } from 'components/account';
import AccountLayout from 'components/layout/accountLayout';
import * as style from 'components/layout/layout.styled';
import type { AccountTab } from 'constants/account';
import account from 'constants/account';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import type { Session } from 'next-auth';
import { getSession } from 'http/server/auth/user';
import {
  dehydrate,
  QueryClient,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/fallback';
import HeadSeo from 'components/common/headSeo/headSeo';
import { prefetchAccount, QUERY_KEYS } from 'http/server/account';
import { css } from 'styled-components';

type AccountParams = Params & {
  tab: AccountTab | null;
};

const Account: NextPageWithLayout = ({
  isMyAccountPage,
  accountRoutes,
  tab,
  sub,
  profile,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeadSeo
        title={profile.nickname}
        description={`${profile.nickname}님의 프로필`}
      />
      <Container margin="20px 0 0 0">
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <>
              <ErrorBoundary
                onReset={reset}
                fallbackRender={(props) => <ErrorFallback {...props} />}
              >
                <Profile
                  isMyAccountPage={isMyAccountPage}
                  sub={sub}
                  profile={profile}
                />
              </ErrorBoundary>
              <Wrapper css={style.account}>
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={(props) => (
                    <ErrorFallback {...props} margin="100px 0" />
                  )}
                >
                  <Wrapper
                    css={css`
                      ${applyMediaQuery('mobile')} {
                        padding: 0 16px;
                      }
                    `}
                  >
                    <AccountCategory
                      sub={sub}
                      tab={tab}
                      isMyAccountPage={isMyAccountPage}
                      accountRoutes={accountRoutes}
                    />
                  </Wrapper>
                </ErrorBoundary>
              </Wrapper>
            </>
          )}
        </QueryErrorResetBoundary>
      </Container>
    </>
  );
};

Account.Layout = AccountLayout;

export const getUserPageProps = async (
  ctx: GetServerSidePropsContext,
  session: Session | null
) => {
  const { query } = ctx;
  const { sub, tab } = query as AccountParams;

  const isMyAccountPage = session && session.sub == sub;
  const isCorrectTab = tab && account.accountTab.includes(tab);

  const queryClient = new QueryClient();

  const user: BaseApiHandlerResponse<{ data: ProfileType }> =
    await prefetchAccount({ id: sub, token: session?.accessToken });

  if (!user.ok) {
    return {
      notFound: true,
    };
  }

  const accountRoutes = isMyAccountPage
    ? user.data.role == 'user'
      ? account.accountRoutes.myAccount(sub)
      : account.accountRoutes.dealerAccount(sub)
    : account.accountRoutes.someoneAccount(sub);

  await queryClient.prefetchQuery(QUERY_KEYS.id(sub), async () => {
    const { ok, status, ...rest } = user;
    return rest;
  });

  /**
   * 타유저인 경우 작성글과 댓글단 글만 볼 수 있다.
   * 딜러가 아닌 경우 제한 처리
   * 이에 따라 쿼리 접근 제한 처리
   */
  if (isMyAccountPage && !isCorrectTab) {
    return {
      redirect: {
        destination: `/account/${sub}?tab=${account.accountTab[1]}`,
        permanent: false,
      },
    };
  }
  if (
    !isMyAccountPage &&
    (!tab || !(tab === 'community' || tab === 'comment'))
  ) {
    return {
      redirect: {
        destination: `/account/${sub}?tab=${account.accountTab[4]}`,
        permanent: false,
      },
    };
  }

  if (user.data.role !== 'dealer' && tab === 'dealer-product') {
    return {
      redirect: {
        destination: `/account/${sub}?tab=${account.accountTab[1]}`,
        permanent: false,
      },
    };
  }

  if ((isMyAccountPage && isCorrectTab) || (!isMyAccountPage && isCorrectTab))
    return {
      props: {
        isMyAccountPage,
        accountRoutes,
        tab,
        sub,
        profile: user.data,
        dehydratedState: dehydrate(queryClient),
      },
    };

  return {
    notFound: true,
  };
};

export const getServerSideProps: GetServerSideProps = async (
  ctx
): Promise<any> => {
  const { req } = ctx;
  const session = await getSession({ req });

  if (!session)
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };

  return await getUserPageProps(ctx, session);
};

export default Account;
