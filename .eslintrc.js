module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jest/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jest/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2022,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'jest',
  ],
  'rules': {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': [ 'error', 'unix' ],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],
  }
}
