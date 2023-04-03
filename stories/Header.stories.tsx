import type { Meta, StoryFn } from '@storybook/react';

import * as React from 'react';

import { Header, HeaderProps } from '../src/examples/Header';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
