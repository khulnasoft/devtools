module.exports = require('@devtools/cli/config/eslint-factory')(__dirname, {
  ignorePatterns: ['templates/**'],
  rules: {
    'no-console': 0,
  },
});
