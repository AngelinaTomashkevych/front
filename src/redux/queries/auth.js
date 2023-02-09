import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getBaseUrl } from './getBaseUrl';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
  }),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({ url: '/login', method: 'POST', body }),
      providesTags: ['Auth'],
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Auth', id }],
    }),
  }),
});

export default authApi;
