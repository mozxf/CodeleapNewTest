import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IPost, IPostDTO } from '@/components/Post/Post';

export const definePosts = createAsyncThunk<IPost[]>(
  'posts/definePosts',
  async (thunkAPI) => {
    const response = await fetch('https://dev.codeleap.co.uk/careers/');
    const json = await response.json();
    const data = await json.results;

    return data as IPost[];
  }
);

export const createPost = createAction('posts/createPost');

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: number, thunkAPI) => {
    const options = {
      method: 'DELETE',
    };

    const response = await fetch(
      `https://dev.codeleap.co.uk/careers/${id}/ `,
      options
    );
    return response;
  }
);

type TEditPost = {
  id: number;
  body: IPostDTO;
};

export const editPost = createAsyncThunk(
  'posts/editPost',
  async ({ id, body }: TEditPost, thunkAPI) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(
      `https://dev.codeleap.co.uk/careers/${id}/ `,
      options
    );
    return response;
  }
);
