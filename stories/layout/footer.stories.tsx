import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Footer } from '../../src';

storiesOf('Layout', module).add('Footer', () => (
  <div className="w-full">
    <Footer>
      <div className="bg-blue-400 w-full h-64 text-white">Footer</div>
    </Footer>
  </div>
));
