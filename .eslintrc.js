module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-continue': 'off',
    'max-len': 'off',
  },
};
