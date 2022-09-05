import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { username } from '@/redux/reducers/username.js';
import { posts } from './reducers/posts';

const reducer = combineReducers({ username, posts });

const store = configureStore({ reducer });
export type RootState = ReturnType<typeof store.getState>;

export default store;
