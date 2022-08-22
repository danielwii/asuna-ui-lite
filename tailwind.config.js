module.exports = {
  content:
    process.env.NODE_ENV === 'production'
      ? ['./src/**/*.{ts,tsx}']
      : ['./src/**/*.{ts,tsx}', './stories/**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
};
