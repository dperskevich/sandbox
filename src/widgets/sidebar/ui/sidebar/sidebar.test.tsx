/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/render-with-translation/render-with-translation';
import userEvent from '@testing-library/user-event';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  test('should be rendered', () => {
    render(renderWithTranslation(<Sidebar />));
    const sidebar = screen.getByTestId('Sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('toggle', () => {
    render(renderWithTranslation(<Sidebar />));
    const sidebar = screen.getByTestId('Sidebar');
    const toggle = screen.getByTestId('sidebar-toggle');

    expect(sidebar).not.toHaveClass('collapsed');
    userEvent.click(toggle);
    expect(sidebar).toHaveClass('collapsed');
  });
});
