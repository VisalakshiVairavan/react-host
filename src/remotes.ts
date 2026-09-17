import { lazy } from 'react';
import { queryOptions } from '@tanstack/react-query';

export const ProductTable = lazy(() => import('remote/ProductTable'));
export const PriceChart = lazy(() => import('remote/PriceChart'));

export const widgetsQuery = queryOptions({
  queryKey: ['remote-widgets'],
  queryFn: () => import('remote/widgets').then((m) => m.widgets),
  staleTime: Infinity,
});
