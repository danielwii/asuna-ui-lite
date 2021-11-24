module.exports = {
  // core: { builder: 'webpack5' },
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    { name: '@storybook/addon-postcss', options: { postcssLoaderOptions: { implementation: require('postcss') } } },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
};
