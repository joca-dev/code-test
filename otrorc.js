const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: false
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    },
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }]
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '{react}',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '{assets/**,@ant-design/icons}',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF
  }
}
