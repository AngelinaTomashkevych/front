import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  id: null,
};

const appInfoSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    setAppInfo(state, action) {
      state.isAuth = action.payload.isAuth;
      state.id = action.payload.id;
    },
  },
});

export const { setAppInfo } = appInfoSlice.actions;

export default appInfoSlice;
