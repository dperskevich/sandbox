import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state as StateSchema}>
    <StoryComponent />
  </StoreProvider>
);
