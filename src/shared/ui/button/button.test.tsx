/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from './button';

describe('Button', () => {
  test('Should be rendered', () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Should have text variant', () => {
    const { debug } = render(<Button variant={ButtonVariant.Text}>Click</Button>);
    const button = screen.getByRole('button');
    // debug(); || screen.debug();
    expect(button).toHaveClass(ButtonVariant.Text);
  });
});
