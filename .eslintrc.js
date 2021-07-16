module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript',
  ],
  rules: {
    "indent": ["error", 2]
  }
};