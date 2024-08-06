import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/app.scss';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { LoginForm } from './login-form';

export default {
  title: 'Features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [ThemeDecorator(Theme.Light)];

