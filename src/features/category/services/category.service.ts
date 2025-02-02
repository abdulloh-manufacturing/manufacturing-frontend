import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createCategory: builder.mutation<any, { category_name: string }>({
      query: ({ category_name }) => ({
        url: '/category/create',
        method: 'POST',
        body: { category_name },
      }),
    }),
  }),
});

export const { useCreateCategoryMutation } = categoryApi;
