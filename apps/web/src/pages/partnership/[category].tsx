'use client';

import React from 'react';
import { css } from 'styled-components';
import { useRouter } from 'next/router';
import { ErrorBoundary } from 'react-error-boundary';
import { NextPageContext } from 'next/types';
import { NextPageWithLayout, Params } from '@supercarmarket/types/base';
import { Pagination, Searchbar, Table, Wrapper } from '@supercarmarket/ui';
import {
  dehydrate,
  QueryClient,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import type { ParsedUrlQuery } from 'querystring';

import queries from 'constants/queries';
import layout from 'components/layout';
import Banner from 'components/partnership/banner';
import Category from 'components/partnership/category';
import PartnershipRow from 'components/partnership/partnershipRow';
import usePartnership from 'hooks/queries/usePartnership';
import { ErrorFallback } from 'components/fallback';
import { useSearchKeyword } from 'hooks/useSearchKeyword';
import { PARTNERSHIP_CATEGORY } from 'constants/partnership';

interface IParams extends ParsedUrlQuery {
  category: string;
}

const PartnershipPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { data: partnerships, isLoading } = usePartnership(query as Params);
  const { keydownHandler, keywordRef } = useSearchKeyword({
    domain: 'partnership',
  });

  if (isLoading) return <div>로딩 중???</div>;

  return (
    <>
      <Banner
        title="제휴업체 등록을 원하시나요?"
        btnTitle="등록 문의하기"
        url=""
      />
      <Wrapper.Top
        css={css`
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Searchbar
          width="880px"
          variant="Line"
          placeholder="원하시는 업체를 검색하세요"
          onKeyDown={keydownHandler}
          ref={keywordRef}
        />
      </Wrapper.Top>
      <Category category={PARTNERSHIP_CATEGORY} />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={(props) => <ErrorFallback {...props} />}
          >
            {partnerships && (
              <>
                <Wrapper
                  css={css`
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 80px;
                  `}
                >
                  <Table tab="partnership" hidden={false} />
                  {partnerships.data.map((p) => (
                    <PartnershipRow key={p.brdSeq} {...p} />
                  ))}
                </Wrapper>
                <Pagination
                  pageSize={20}
                  totalCount={partnerships.totalCount}
                  totalPages={partnerships.totalPages}
                />
              </>
            )}
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </>
  );
};

PartnershipPage.Layout = layout;

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { category } = ctx.query as IParams;

  const queryClient = new QueryClient();

  if (
    !category ||
    !PARTNERSHIP_CATEGORY.map(({ value }) => value).includes(category as string)
  )
    return {
      redirect: {
        destination: '/partnership/all',
        permanent: false,
      },
    };

  queryClient.prefetchQuery(queries.partnership.lists([]), () =>
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/supercar/v1/partnership`, {
      method: 'GET',
    }).then((res) => res.json())
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default PartnershipPage;