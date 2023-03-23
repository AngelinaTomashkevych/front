import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalName: null,
  modalProps: null,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    showModal(state, action) {
      const { name, props } = action.payload;

      state.modalName = name;
      state.modalProps = props;
    },
    hideModal(state) {
      state.modalName = null;
      state.modalProps = null;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice;
