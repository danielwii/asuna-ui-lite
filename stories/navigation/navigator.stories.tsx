import { storiesOf } from '@storybook/react';
import React from 'react';
import { Navigator } from '../../src/navigator';
import { StoreProvider } from '../../src/helper';

const items = [
  { name: 'Home', link: '#' },
  { name: 'Product', link: '#' },
  { name: 'Contact', link: '#' },
  { name: 'About', link: '#' },
  { name: 'News', link: '#' },
];

storiesOf('Navigation', module).add('Navigator', () => (
  <StoreProvider initialState={{ selected: 'Home' }}>
    {(state, setState) => (
      <Navigator items={items} selected={state.selected} onClick={(item) => setState({ selected: item })} />
    )}
  </StoreProvider>
));
