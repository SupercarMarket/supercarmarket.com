import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import theme from 'constants/theme';
import type { AppContext, AppProps } from 'next/app';
import NextAppBase from 'next/app';
import { SessionProvider } from 'next-auth/react';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyles';
import { DefaultSeo } from 'next-seo';
import { seoConfig } from 'utils/next-seo.config';
import { Inter } from '@next/font/google';
import localFont from '@next/font/local';

interface PageProps {
  $ua: {
    userAgent?: string;
    hints?: {
      isMobile: boolean;
    };
  };
}

const Nope: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
  display: 'swap',
});

export const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
  variable: '--font-pretendard',
  fallback: ['--font-pretendard', '-apple-system', 'system-ui'],
});

function MyApp({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}: AppProps<PageProps>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
            useErrorBoundary: true,
          },
          mutations: {
            useErrorBoundary: true,
          },
        },
      })
  );
  const Layout = (Component as any).Layout || Nope;

  console.log(pageProps);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <SessionProvider session={session}>
            <DefaultSeo
              openGraph={{
                ...seoConfig.headSeo,
              }}
              {...seoConfig.defaultNextSeo}
            />
            <GlobalStyle />
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
            <style jsx global>{`
              :root {
                --font-inter: ${inter.style.fontFamily};
                --font-pretendard: ${pretendard.style.fontFamily};
              }
            `}</style>
          </SessionProvider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextAppBase.getInitialProps(appContext);
  const headers = appContext.ctx.req?.headers;
  const prevPageProps = (appProps.pageProps as PageProps) ?? {};
  const nextPageProps = {
    ...prevPageProps,
    $ua: {
      userAgent: headers?.['user-agent'],
      hints: {
        isMobile: headers?.['sec-ch-ua-mobile']?.includes('1'),
      },
    },
  };

  return {
    ...appProps,
    pageProps: nextPageProps,
  };
};

export default MyApp;
