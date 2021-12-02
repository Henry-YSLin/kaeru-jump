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
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'quotes': ['warn', 'single'],
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'consistent-return': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-return-await': 'off',
    'no-trailing-spaces': 'warn',
    'arrow-spacing': 'warn',
    'comma-spacing': 'warn',
    'no-underscore-dangle': 'off',
    'no-warning-comments': [
      'warn',
      { 'terms': ['todo', 'debug', 'note'], 'location': 'start' }
    ],
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/no-var-requires': 'off',
    'prefer-destructuring': ['warn', { 'object': true, 'array': false }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { 'ignoreRestArgs': true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { 'argsIgnorePattern': 'req|res|next|val|props|^_' }
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    'prefer-template': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'space-infix-ops': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-continue': 'off',
    'max-len': 'off',
  },
};
