import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/app.scss';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { Modal } from './modal';

export default {
  title: 'Shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) =>
  <Modal isOpen={true} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem Ipsum',
};
Primary.decorators = [ThemeDecorator(Theme.Light)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Lorem Ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
