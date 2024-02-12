module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  plugins: ['promise'],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // add under other rules
    '@vue/prettier',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:jsonc/recommended-with-jsonc',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: {
      ts: '@typescript-eslint/parser',
      json: 'jsonc-eslint-parser',
    },
  },
  rules: {
    'jsonc/sort-keys': 'warn',

    '@typescript-eslint/method-signature-style': ['error', 'property'],

    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],

    'vue/multi-word-component-names': 'off',
  },
}
