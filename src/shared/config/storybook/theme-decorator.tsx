import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/class-names';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider>
    <div className={classNames('app', {}, [theme])}>
      AAA
      <StoryComponent />
    </div >
  </ThemeProvider>
);
