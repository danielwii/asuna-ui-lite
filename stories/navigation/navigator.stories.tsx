import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Navigator, StoreProvider } from '../../src';

const items = [{ name: 'Home' }, { name: 'Product' }, { name: 'Contact' }, { name: 'About' }, { name: 'News' }];

const { Item } = Navigator;

storiesOf('Navigation', module).add('Navigator', () => (
  <StoreProvider initialState={{ selected: 'Home' }}>
    {(state, setState) => (
      <Navigator
        items={items}
        renderItem={(item, idx) => (
          <Item {...item} selected={state.selected === item.name} key={idx}>
            <div className="cursor-pointer" onClick={() => setState({ selected: item.name })}>
              {item.name}
            </div>
          </Item>
        )}
      />
    )}
  </StoreProvider>
));
