import { configureStore } from '@reduxjs/toolkit';

import authApi from './queries/auth';
import taksmanApi from './queries/taskman';
import appInfo from './slice/appInfo';
import modalSlice from './slice/modalSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [taksmanApi.reducerPath]: taksmanApi.reducer,
    [appInfo.name]: appInfo.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, taksmanApi.middleware),
});
