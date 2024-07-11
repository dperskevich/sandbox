import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/app.scss';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { Button, ButtonVariant } from './button';

export default {
  title: 'Shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariant.Primary,
  children: 'Button',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  variant: ButtonVariant.Primary,
  children: 'Button',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
