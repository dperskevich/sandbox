import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/local-storage/local-storage';
// todo: find out why Storybook build fails here for absolute import
import { User, userActions } from '../../../../../entities/user';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

// rejecteValue - the type of the payload when thunk rejected
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData: LoginByUsernameProps, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) throw new Error('Response is empty');
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      // save current user session to state
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (error) {
      console.error('API Error: ', error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  },
);
