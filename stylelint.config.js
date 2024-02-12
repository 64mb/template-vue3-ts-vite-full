export default {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue/scss', 'stylelint-config-clean-order'],
  rules: {
    'prettier/prettier': true,

    'at-rule-allowed-list': ['import', 'include', 'supports', 'media', 'keyframes', 'each', 'font-face', 'use', 'container', 'extend'],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace'],
      },
    ],
  },
}
