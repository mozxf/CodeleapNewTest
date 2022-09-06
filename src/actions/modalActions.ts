import { IPost, IPostDTO } from '@/components/Post/Post';
import { createAction } from '@reduxjs/toolkit';

export const setEditModalVisible = createAction<boolean>(
  'modal/setEditModalVisible'
);

export const setDeleteModalVisible = createAction<boolean>(
  'modal/setDeleteModalVisible'
);

export const setIdToDelete = createAction<number>('modal/setIdToDelete');

export const setidToEdit = createAction<number>('modal/setIdToEdit');
export const setToEditPostData = createAction<IPostDTO>(
  'modal/setToEditPostData'
);
