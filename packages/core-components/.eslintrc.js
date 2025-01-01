module.exports = require('@devtools/cli/config/eslint-factory')(__dirname, {
  rules: {
    'jest/expect-expect': 0,
    '@devtools/no-top-level-material-ui-4-imports': 'error',
  },
  restrictedImports: [
    {
      name: '@devtools/core-components',
      message: "To avoid circular dependencies, use relative paths to import '@devtools/core-components' from its subdirectories."
    },
    {
      name: '@material-ui/core',
      message: "Please import '@material-ui/core/...' instead.",
    },
  ],
});
