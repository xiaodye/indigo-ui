module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
