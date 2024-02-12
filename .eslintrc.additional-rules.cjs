module.exports = {
  rules: {
    camelcase: 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'no-underscore-dangle': ['error', { allow: ['_', '_id'] }],

    // plain
    radix: ['error', 'as-needed'],
    'no-debugger': 'error',
    'no-console': 'error',
    'no-new': 'off',
    'no-continue': 'off',
    'no-await-in-loop': 'off',
    'no-unused-vars': 'warn',

    // safe
    'prefer-destructuring': 'off',
    'no-restricted-syntax': 'warn',
    'class-methods-use-this': 'off',
    'ts-nocheck': 'off',

    // miss safe
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-cycle': 'off',
    'global-require': 'off',
    'max-classes-per-file': 'off',

    // vue
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/camelcase': 'error',
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],

    // vue plain
    'vue/no-unused-vars': 'warn',

    // vue html
    'vue/html-indent': ['error', 2],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    'vue/no-boolean-default': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': ['error', 'smart'],
    'vue/key-spacing': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/script-setup-uses-vars': 'error',
  },
}
