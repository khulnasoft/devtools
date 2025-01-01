module.exports = require('@devtools/cli/config/eslint-factory')(__dirname, {
  rules: {
    'testing-library/prefer-screen-queries': 'error',
    '@devtools/no-top-level-material-ui-4-imports': 'error',
  },
});
