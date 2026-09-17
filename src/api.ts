import { queryOptions } from '@tanstack/react-query';
import type { ProductsResponse } from 'remote/widgets';

export const productsQuery = queryOptions({
  queryKey: ['products'],
  queryFn: async (): Promise<ProductsResponse> => {
    const res = await fetch('https://dummyjson.com/products?limit=30');
    if (!res.ok) throw new Error(`DummyJSON returned ${res.status}. Refresh to try again.`);
    return res.json();
  },
  staleTime: 5 * 60 * 1000,
});
