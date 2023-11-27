import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../../.env';

interface QueryParams {
  page: number;
  limit: number;
}

const baseUrl = BASE_URL;

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}`}),
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
