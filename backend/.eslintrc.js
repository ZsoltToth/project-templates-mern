module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: [2, 'always']
  },
  ignorePatterns: ['**/node_modules/**', '**/public/**', '**/build/**'],
  overrides: [
    {
      files: ['**/node_modules/**', '**/public/**', '**/build/**'],
      rules: {
        strict: 'off'
      }
    }
  ]
};
