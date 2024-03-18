module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    quotes: ['warn', 'single'],
    'comma-dangle': 'off',
  },
  overrides: [
    {
      files: ['tests/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
