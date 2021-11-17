module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'cypress'
  ],
  rules: {
    semi: ['error', 'always'],
    'no-use-before-define': 'off'
  },
  settings: {
    react: {
      version: '17.0.2'
    }
  },
  overrides: [
    {
      files: ['*.spec.js', '*.spec.tsx'],
      rules: {
        'no-unused-expressions': 'off',
        'jest/valid-expect': 'off',
        'jest/valid-expect-in-promise': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint']
    }
  ]
};
