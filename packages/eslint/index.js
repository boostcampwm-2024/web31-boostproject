import js from '@eslint/js';
import globals from 'globals';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default {
  jsCommended: js.configs.recommended,
  base: {
    files: ['**/*.{js,ts}'],
    ignores: ['**/node_modules/**/*', '**/dist/**/*', '**/*.config.js', '**/*.config.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-constant-condition': 'warn',
      'prefer-arrow-callback': 'error',
      curly: ['error', 'all'],
      'no-else-return': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          filter: {
            regex: 'store$',
            match: true,
          },
          format: ['camelCase'],
          suffix: ['store'],
        },
        {
          selector: 'function',
          format: ['camelCase'],
        },
        {
          selector: 'function',
          filter: {
            regex: '^use[A-Z]',
            match: true,
          },
          format: ['camelCase'],
          prefix: ['use'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: ['typeAlias'],
          format: ['PascalCase'],
          prefix: ['T'],
          filter: {
            regex: 'Props$',
            match: false,
          },
        },
      ],
      camelcase: 'error',
      'spaced-comment': ['error', 'always'],
      'multiline-comment-style': ['error', 'starred-block'],
      'lines-around-comment': ['error', { beforeBlockComment: true }],
    },
  },
  ignorePrettier: eslintConfigPrettier,
};
