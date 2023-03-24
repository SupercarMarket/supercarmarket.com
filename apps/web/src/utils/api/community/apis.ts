import { clientApi, clientFetcher } from '@supercarmarket/lib';

export const getCommunity = async ({
  query,
}: {
  query: {
    category: string;
    page: number;
    filter?: string;
    searchType?: string;
    keyword?: string;
  };
}) => {
  const { category = 'report', page = 0, filter, searchType, keyword } = query;

  const currentQuery = keyword && {
    searchType,
    keyword,
  };

  return clientFetcher('/server/supercar/v1/community', {
    method: 'GET',
    query: {
      filter,
      page: page + 1,
      category: category === 'all' ? 'report' : category,
      ...currentQuery,
    },
  });
};

export const getCommunityPost = async ({
  category,
  id,
  token,
}: {
  category: string;
  id: string;
  token?: string;
}) => {
  const headers = token ? { ACCESS_TOKEN: token } : undefined;

  return clientFetcher(
    `/server/supercar/v1/community/${category}/post-id/${id}`,
    {
      method: 'GET',
      headers,
    }
  );
};

export const likeCommunityPost = async ({
  id,
  category,
  token,
}: {
  id: string;
  category: string;
  token: string;
}) => {
  return clientApi(`/server/supercar/v1/community/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ACCESS_TOKEN: token,
    },
    data: {
      category,
    },
  });
};

export const deleteCommunityPost = async ({
  data,
  token,
}: {
  data: {
    id: string;
    category?: string;
  }[];
  token: string;
}) => {
  return clientApi(`/server/supercar/v1/community`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ACCESS_TOKEN: token,
    },
    data,
  });
};
