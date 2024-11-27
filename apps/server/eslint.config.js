import defaultConfig from '@packages/eslint';

export default [
  defaultConfig.jsCommended,
  defaultConfig.base,
  {
    ignores: [...defaultConfig.base.ignores, '**/dist/**/*', '**/swagger.ts'],
  },
  defaultConfig.ignorePrettier,
];
