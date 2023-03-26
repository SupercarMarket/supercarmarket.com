import { clientFetcher, serverFetcher } from '@supercarmarket/lib';

interface GetPartnershipListProps {
  page?: string;
  pageSize?: string;
  region?: string;
  category: string;
  keyword?: string;
}

const getPartnershipList = async (query: GetPartnershipListProps) => {
  const { category, page, ...rest } = query;

  console.log(category);

  const queries =
    query.category === 'all'
      ? { page: Number(query.page) + 1 || '1', ...rest }
      : {
          category: category.toUpperCase(),
          ...rest,
        };

  return clientFetcher(`/server/supercar/v1/partnership`, {
    method: 'GET',
    query: queries,
  });
};

const getPartnership = async (id: string) => {
  return serverFetcher(`/server/supercar/v1/partnership/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { getPartnershipList, getPartnership };
