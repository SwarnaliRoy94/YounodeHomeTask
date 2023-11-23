import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface QueryParams {
  page: number;
  limit: number;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: builder => ({
    getTodos: builder.query({
      query: (params: QueryParams) => ({
        url: `/todos?_page=${params.page}&_limit=${params.limit}`,
        method: 'Get',
      }),
    }),
  }),
});

export const {useGetTodosQuery} = todoApi;
