import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { username } from './reducers/username.js';
import { posts } from './reducers/posts.js';
import { modal } from './reducers/modal.js';

const store = configureStore({ reducer: { modal, username, posts } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
