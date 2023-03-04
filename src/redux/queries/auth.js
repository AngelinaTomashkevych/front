import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setToken } from 'cookieService';

import { getBaseUrl } from './getBaseUrl';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    credentials: 'include',
  }),
  tagTypes: ['Login', 'Registration', 'CheckAuth'],
  endpoints: (build) => {
    return {
      login: build.mutation({
        query: (body) => ({ url: '/signin', method: 'POST', body }),
        transformResponse: (response) => {
          setToken(response.token);
          return response;
        },
        transformErrorResponse: (response) => response.data,
        providesTags: ['Login'],
      }),

      registration: build.mutation({
        query: (body) => ({ url: '/signup', method: 'POST', body }),
        transformResponse: (response) => {
          setToken(response.token);
          return response;
        },
        transformErrorResponse: (response) => response.data,
        providesTags: ['Registration'],
      }),

      checkAuth: build.query({
        query: () => ({ url: '/check-auth', method: 'GET' }),
        transformResponse: (response) => response,
        transformErrorResponse: (response) => response.data,
        providesTags: ['CheckAuth'],
      }),
    };
  },
});

export const { useLoginMutation, useRegistrationMutation, useCheckAuthQuery } =
  authApi;

export default authApi;
