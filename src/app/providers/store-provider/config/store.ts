import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/counter/model/slice/counter-slice';
import { StateSchema } from './state-schema';

// wrap default configureStore with function to
// reuse in Storybook as well
export const CreateReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: {
    counter: counterReducer,
  },
  devTools: __IS_DEV__,
  preloadedState: initialState,
});
