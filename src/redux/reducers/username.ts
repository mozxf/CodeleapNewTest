import { createReducer } from '@reduxjs/toolkit';
import { defineUsername } from '@/actions/usernameActions';

export type TUsername = {
  value: string;
};

const initialState: TUsername = { value: '' };

export const username = createReducer(initialState, (builder) => {
  builder.addCase(defineUsername, (state, action) => {
    state.value = action.payload;
  });
});
