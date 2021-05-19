import { storiesOf } from '@storybook/react';
import React from 'react';
import { Layout } from '../../src';

const { Header } = Layout;

storiesOf('Layout', module).add('Default', () => (
  <Layout>
    <Header className="h-64 bg-blue-200">The header</Header>
  </Layout>
));
