import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/login-by-username/login-by-username';
import { LoginSchema } from '../types/login-schema';

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: undefined,
} as LoginSchema;

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.error = undefined;
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isLoading = false;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
