import defaultConfig from '@packages/eslint';
import react from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import storybookPlugin from 'eslint-plugin-storybook';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  defaultConfig.jsCommended,
  defaultConfig.base,
  {
    files: [...defaultConfig.base.files, '**/*.{jsx,tsx}'],
    plugins: {
      ...defaultConfig.base.plugins,
      react,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      storybook: storybookPlugin,
    },
    languageOptions: {
      ...defaultConfig.base.languageOptions,
      globals: {
        ...defaultConfig.base.languageOptions.globals,
        React: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
    settings: {
      react: {
        version: '18.3.1',
      },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
  },
  {
    ignores: [
      ...defaultConfig.base.ignores,
      '**/dist/**/*',
      '**/vite-env.d.ts',
      '**/.storybook/**',
    ],
  },
  defaultConfig.ignorePrettier,
];
