module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['ConditionalExpression']
    }],
    'no-console': 'off',
    // no console.log warning
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'warn',
    'max-len': ['error', {
      code: 120
    }],
    '@typescript-eslint/no-shadow': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/react-in-jsx-scope': 'off',
    // Since React 17, no need to import React
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }]
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }]
};