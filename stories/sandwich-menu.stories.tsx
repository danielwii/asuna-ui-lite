import { storiesOf } from '@storybook/react';
import React from 'react';
import { SandwichMenu } from '../src/sandwich-menu';
import { StoreProvider } from '../src/helper';

const items = [
  { name: 'Home', link: '#' },
  { name: 'Product', link: '#' },
  { name: 'Contact', link: '#' },
  { name: 'About', link: '#' },
  { name: 'News', link: '#' },
];

storiesOf('SandwichMenu', module).add('Default', () => (
  <StoreProvider initialState={{ selected: 'Home' }}>
    {(state, setState) => (
      <SandwichMenu items={items} selected={state.selected} onClick={(item) => setState({ selected: item })} />
    )}
  </StoreProvider>
));
