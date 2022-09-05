import { createReducer } from '@reduxjs/toolkit';
import { IPost } from '@/components/Post/Post';
import { definePosts } from '@/actions/postsActions';

const initialState: Array<IPost> = [];

export const posts = createReducer(initialState, (builder) => {
  builder.addCase(definePosts, (state, action) => {
    return (state = action.payload);
  });
});
