import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getBaseUrl } from './getBaseUrl';

const taksmanApi = createApi({
  reducerPath: 'taksmanApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    credentials: 'include',
  }),
  tagTypes: ['Get-tasks', 'Add-task', 'Delete-task'],
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
        transformErrorResponse: (response) => response.data,
        providesTags: ['Add-task'],
        invalidatesTags: ['Get-tasks'],
      }),

      deleteTask: build.mutation({
        query: (id) => ({
          url: `/taskman/delete-task/${id}`,
          method: 'DELETE',
        }),
        transformErrorResponse: (response) => response.data,
        providesTags: ['Delete-task'],
        invalidatesTags: ['Get-tasks'],
      }),
    };
  },
});

export const { useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation } =
  taksmanApi;

export default taksmanApi;
