import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../get-counter/get-counter';

export const GetCounterValue = createSelector(
  getCounter,
  (counter) => counter.value,
);
