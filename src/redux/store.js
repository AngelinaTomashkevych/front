import { configureStore } from '@reduxjs/toolkit';

import authApi from './queries/auth';
import appInfo from './slice/appInfo';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [appInfo.name]: appInfo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
