import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
