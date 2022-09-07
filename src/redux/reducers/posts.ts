import { createReducer } from '@reduxjs/toolkit';
import { IPost } from '@/components/Post/Post';
import {
  createPost,
  definePosts,
  deletePost,
  editPost,
} from '@/actions/postsActions';

const initialState: Array<IPost> = [];

export const posts = createReducer(initialState, (builder) => {
  builder.addCase(definePosts.fulfilled, (state, action) => {
    return (state = action.payload);
  });
  builder
    .addCase(createPost.fulfilled, (state) => {
      return state;
    })
    .addCase(deletePost.fulfilled, (state) => {
      return state;
    })
    .addCase(editPost.fulfilled, (state) => {
      return state;
    });
});
