/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCounterValue } from '../model/selectors/get-counter-value/get-counter-value';
import { counterActions } from '../model/slice/counter-slice';

export const Counter: FC = (props) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(GetCounterValue);

  const increment = () => dispatch(counterActions.increment());
  const decrement = () => dispatch(counterActions.decrement());

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>

      <button
        type="button"
        onClick={increment}
        data-testid="increment-button"
      >
        increment
      </button>
      <button
        type="button"
        onClick={decrement}
        data-testid="decrement-button"
      >
        decrement
      </button>
    </div>
  );
};
