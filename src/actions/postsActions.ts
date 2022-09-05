import { createAction } from '@reduxjs/toolkit';
import { IPost } from '@/components/Post/Post';

export const definePosts = createAction<Array<IPost>>('posts/definePosts');
