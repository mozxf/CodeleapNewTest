import { createAsyncThunk } from '@reduxjs/toolkit';
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

type TCreatePost = {
  username: string;
  title: string;
  content: string;
};

export const createPost = createAsyncThunk(
  'posts/createPost',
  async ({ username, title, content }: TCreatePost, thunkAPI) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, title, content }),
    };

    const response = await fetch(
      `https://dev.codeleap.co.uk/careers/ `,
      options
    );
    return response;
  }
);

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
