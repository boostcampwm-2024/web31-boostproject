import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import typescriptEslintParser from '@typescript-eslint/parser';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import storybookPlugin from 'eslint-plugin-storybook';

// __filename 및 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const baseConfig = resolve(__dirname, 'tsconfig.json');

export default [
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: [baseConfig],
      },
    },
    plugins: {
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      storybook: storybookPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: [baseConfig],
          alias: {
            map: [['@', './src']],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
  },
];
