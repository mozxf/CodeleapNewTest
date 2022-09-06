import { createReducer } from '@reduxjs/toolkit';
import { defineUsername } from '@/actions/usernameActions';

export type TUsername = {
  value: string;
};

const initialState: TUsername = (() => {
  const localUsername = localStorage.getItem('username');
  if (localUsername) {
    return { value: localUsername };
  }
  return { value: '' };
})();

export const username = createReducer(initialState, (builder) => {
  builder.addCase(defineUsername, (state, action) => {
    state.value = action.payload;
  });
});
