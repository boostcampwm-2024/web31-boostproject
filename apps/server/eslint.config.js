import defaultConfig from '@packages/eslint';

export default [
  defaultConfig.jsCommended,
  defaultConfig.base,
  {
    ignores: [...defaultConfig.base.ignores, '**/dist/**/*'],
  },
  defaultConfig.ignorePrettier,
];
