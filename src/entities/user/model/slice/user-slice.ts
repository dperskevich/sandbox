import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState = {
  value: 0,
} as UserSchema;

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
