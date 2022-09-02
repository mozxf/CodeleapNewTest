import { configureStore } from '@reduxjs/toolkit';
import { usernameReducer } from '@/redux/reducers/username.js';

const store = configureStore({ reducer: usernameReducer });

export default store;
