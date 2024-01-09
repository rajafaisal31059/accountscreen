import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({
        url: 'products?limit=100',
        method: 'get',
      }),
    }),
  }),
});

export const {useGetProductsQuery} = api;
