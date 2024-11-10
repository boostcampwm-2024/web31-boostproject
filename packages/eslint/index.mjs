import eslintRecommended from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default {
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/next-env.d.ts',
    '**/*.config.js',
    '**/*.config.ts',
    '**/.storybook/**',
  ],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      browser: true,
      node: true,
    },
    parser: tseslint.parser,
  },
  plugins: {
    '@typescript-eslint': tseslint,
    prettier: prettierPlugin,
  },
  rules: {
    ...eslintRecommended.rules,
    ...tseslint.configs.recommended.rules,
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
  },
};
