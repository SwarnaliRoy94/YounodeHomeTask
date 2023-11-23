import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface QueryParams {
  page: number;
  limit: number;
}

// interface Todos {
//   id: number;
//   title: string;
//   body: string;
//   image: string;
// }

// interface ListResponse<T> {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: T[];
// }

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  // endpoints: builder => ({
  //   getTodos: builder.query<ListResponse<Todos>, number | void>({
  //     query: (page = 1) => `/todos?_page=${page}`,
  //   }),
  // }),

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
