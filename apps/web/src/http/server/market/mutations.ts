import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from './keys';
import {
  deleteMarketPost,
  likeMarketPost,
  updateMarketSellStatus,
} from './apis';

export const useLikeMarketPost = (id: string, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => likeMarketPost({ id }),
    useErrorBoundary: true,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.id(id) });
    },
    ...options,
  });
};

export const useUpdateMarketSellStatus = (options = {}) => {
  return useMutation({
    mutationFn: ({ data }: { data: { brdSeq: number } }) =>
      updateMarketSellStatus({ data }),
    useErrorBoundary: true,
    ...options,
  });
};

export const useDeleteMarketPost = (options = {}) => {
  return useMutation({
    mutationFn: ({ data }: { data: { id: string }[] }) =>
      deleteMarketPost({ data }),
    useErrorBoundary: true,
    ...options,
  });
};
