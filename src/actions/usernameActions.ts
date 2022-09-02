import { createAction } from '@reduxjs/toolkit';

export const defineUsername = createAction<string>('username/defineUsername');
