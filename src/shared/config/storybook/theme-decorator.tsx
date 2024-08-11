import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/store-provider';
import { Theme, ThemeProvider } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/class-names';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <StoreProvider>
    <ThemeProvider>
      <div className={classNames('app', {}, [theme])}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  </StoreProvider>
);
