import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getBaseUrl } from './getBaseUrl';

const taksmanApi = createApi({
  reducerPath: 'taksmanApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    credentials: 'include',
  }),
  tagTypes: ['Get-tasks', 'Add-task'],
  endpoints: (build) => {
    return {
      getTasks: build.query({
        query: () => ({ url: '/taskman/get-tasks', method: 'GET' }),
        transformResponse: (response) => response,
        transformErrorResponse: (response) => response.data,
        providesTags: ['Get-tasks'],
      }),
      addTask: build.mutation({
        query: (body) => ({ url: '/taskman/add-task', method: 'POST', body }),
        transformResponse: (response) => response,
        transformErrorResponse: (response) => response.data,
        providesTags: ['Add-task'],
        invalidatesTags: ['Get-tasks'],
      }),
    };
  },
});

export const { useGetTasksQuery, useAddTaskMutation } = taksmanApi;

export default taksmanApi;
