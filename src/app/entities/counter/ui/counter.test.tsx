import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from 'shared/lib/tests/render-component/render-component';
import { Counter } from './counter';

describe('Counter', () => {
  it('Should be present on the page', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('10');
  });

  it('Should increment the value', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue).toHaveTextContent('10');
    userEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('11');
  });

  it('Should decrement the value', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const decrementButton = screen.getByTestId('decrement-button');
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue).toHaveTextContent('10');
    userEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('9');
  });
});
