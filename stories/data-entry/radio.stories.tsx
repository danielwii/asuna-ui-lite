import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Radio, RadioItem, StoreProvider } from '../../src/';

const items: RadioItem[] = [
  { text: 'basketball', name: 'sports', value: 'basketball' },
  { text: 'baseball', name: 'sports', value: 'baseball' },
  { text: 'badminton', name: 'sports', value: 'badminton' },
];

storiesOf('Data Entry', module)
  .add('Radio', () => (
    <StoreProvider>
      {() => (
        <div className="space-y-4">
          <Radio items={items} onChange={(value) => console.log(value)} />
        </div>
      )}
    </StoreProvider>
  ))
  .add('Radio 默认选中值', () => (
    <StoreProvider initialState={{ checkedItem: 'baseball' }}>
      {(state, setState) => {
        return (
          <div className="space-y-4">
            <Radio
              items={items}
              checkedItem={state.checkedItem}
              onChange={(value) => setState({ checkedItem: value })}
            />
          </div>
        );
      }}
    </StoreProvider>
  ));
