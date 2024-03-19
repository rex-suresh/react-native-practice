module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    quotes: ['warn', 'single'],
    'comma-dangle': 'off'
  },
  plugins: ['@tanstack/eslint-plugin-query'],
  overrides: [
    {
      files: ['tests/**/*'],
      env: {
        jest: true
      }
    }
  ]
};
