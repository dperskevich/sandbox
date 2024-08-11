import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/app.scss';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { LoginForm } from './login-form';

export default {
  title: 'Features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
  login: { username: 'admin', password: 'admin' },
})];
