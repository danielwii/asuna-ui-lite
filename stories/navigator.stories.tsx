import { storiesOf } from '@storybook/react';
import React from 'react';
import { Navigator } from '../src/navigator';
import { StoreProvider } from '../src/helper';

const items = [
  { name: 'Home', link: '#' },
  { name: 'Product', link: '#' },
  { name: 'Contact', link: '#' },
  { name: 'About', link: '#' },
  { name: 'News', link: '#' },
];

storiesOf('Navigator', module).add('Default', () => (
  <StoreProvider initialState={{ activeItem: 'Home' }}>
    {(state, setState) => (
      <Navigator items={items} activeItem={state.activeItem} onClick={(item) => setState({ activeItem: item })} />
    )}
  </StoreProvider>
));
