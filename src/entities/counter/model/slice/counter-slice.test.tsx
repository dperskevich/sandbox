import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { CounterSchema } from '../types/counter-schema';
import { counterActions, counterReducer } from './counter-slice';

describe('CounterSlice', () => {
  it('increment reducer', () => {
    const state: DeepPartial<CounterSchema> = { value: 10 };
    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
  });
});

describe('CounterSlice', () => {
  it('decrement reducer', () => {
    const state: DeepPartial<CounterSchema> = { value: 10 };
    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
  });
});

describe('CounterSlice', () => {
  it('empty state increment', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
