import React from 'react';

import '../src/tailwind.css';

export const decorators = [
  (Story) => (
    <div style={{ margin: '.5rem' }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
