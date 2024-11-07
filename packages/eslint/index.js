export default {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: Object.assign({
    'prettier/prettier': 'error',
    'prefer-arrow-callback': 'error',
    curly: ['error', 'all'],
    'no-else-return': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variable', format: ['camelCase'] },
      { selector: 'function', format: ['camelCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'typeParameter', prefix: ['T'], format: ['PascalCase'] },
    ],
    camelcase: 'error',
    'id-match': ['error', '^(is|are|has|should|can|todo|user)[A-Z][a-zA-Z0-9]*$'],
  }),
};
