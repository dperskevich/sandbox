import { StateSchema } from 'app/providers/store-provider';
import { DeepPartial } from '@reduxjs/toolkit';
import { GetCounterValue } from './get-counter-value';

describe('GetCounterValue', () => {
  it('should return the value of the counter slice of the state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(GetCounterValue(state as StateSchema)).toEqual(10);
  });
});
