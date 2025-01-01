module.exports = {
  ...require('@devtools/cli/config/eslint-factory')(__dirname),
  extends: ['plugin:storybook/recommended'],
  rules: {
    'react/forbid-elements': 'off',
  },
};

