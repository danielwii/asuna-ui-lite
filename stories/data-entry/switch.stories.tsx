import React from 'react';
import { storiesOf } from '@storybook/react';
import { Switch } from '../../src/switch';
import { StoreProvider } from '../../src/helper';

storiesOf('Data Entry', module).add('Switch', () => (
  <StoreProvider initialState={{ checked: true }}>
    {(state, setState) => <Switch checked={state.checked} onClick={() => setState({ checked: !state.checked })} />}
  </StoreProvider>
));
