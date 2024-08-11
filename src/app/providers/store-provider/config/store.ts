import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/auth-by-username';
import { StateSchema } from './state-schema';

// wrap default configureStore with function to
// reuse in Storybook as well
export const CreateReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
