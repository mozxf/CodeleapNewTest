import { createReducer } from '@reduxjs/toolkit';
import {
  setEditModalVisible,
  setDeleteModalVisible,
  setIdToDelete,
  setidToEdit,
  setToEditPostData,
} from '@/actions/modalActions';
import { IPostDTO } from '@/components/Post/Post';

export type TEditHandler = {
  open: boolean;
  post_id: number;
  post_data: IPostDTO;
};

export type TDeleteHandler = {
  open: boolean;
  post_id: number;
};

interface IModal {
  edit: TEditHandler;
  delete: TDeleteHandler;
}

const initialState = {
  edit: {
    open: false,
    post_id: 0,
    post_data: {},
  },
  delete: {
    open: false,
    post_id: 0,
  },
};

export const modal = createReducer(initialState, (builder) => {
  builder
    .addCase(setEditModalVisible, (state, action) => {
      state.edit.open = action.payload;
    })
    .addCase(setDeleteModalVisible, (state, action) => {
      state.delete.open = action.payload;
    })
    .addCase(setIdToDelete, (state, action) => {
      state.delete.post_id = action.payload;
    })
    .addCase(setidToEdit, (state, action) => {
      state.edit.post_id = action.payload;
    })
    .addCase(setToEditPostData, (state, action) => {
      state.edit.post_data = action.payload;
    });
});
