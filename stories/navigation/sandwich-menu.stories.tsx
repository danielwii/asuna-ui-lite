import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { SandwichMenu, StoreProvider } from '../../src';

const items = [{ name: 'Home' }, { name: 'Product' }, { name: 'Contact' }, { name: 'About' }, { name: 'News' }];

const { Item } = SandwichMenu;

storiesOf('Navigation', module).add('SandwichMenu', () => (
  <StoreProvider initialState={{ selected: 'Home' }}>
    {(state, setState) => (
      <SandwichMenu
        items={items}
        renderItem={(item, idx) => (
          <Item {...item} selected={state.selected === item.name} key={idx}>
            <div className="cursor-pointer my-3" onClick={() => setState({ selected: item.name })}>
              {item.name}
            </div>
          </Item>
        )}
      />
    )}
  </StoreProvider>
));
