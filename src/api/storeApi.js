import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    })
  }),
});

export const {
  useGetProductsQuery
} = storeApi;
