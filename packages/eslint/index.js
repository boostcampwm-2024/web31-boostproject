import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default {
  jsCommended: js.configs.recommended,
  base: {
    files: ['**/*.{js,ts}'],
    ignores: [
      '**/node_modules/**/*',
      '**/dist/**/*',
      '**/*.config.js',
      '**/*.config.ts',
      '**/storybook-static/**/*',
    ],
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
