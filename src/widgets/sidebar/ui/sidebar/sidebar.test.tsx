/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from 'shared/lib/tests/render-component/render-component';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  test('should be rendered', () => {
    renderComponent(<Sidebar />);
    const sidebar = screen.getByTestId('Sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('toggle', () => {
    renderComponent(<Sidebar />);
    const sidebar = screen.getByTestId('Sidebar');
    const toggle = screen.getByTestId('sidebar-toggle');

    expect(sidebar).toHaveClass('collapsed');
    userEvent.click(toggle);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
