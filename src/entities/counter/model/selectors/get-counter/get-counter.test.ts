import { StateSchema } from 'app/providers/store-provider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './get-counter';

describe('getCounter', () => {
  it('should return the counter slice of the state', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
