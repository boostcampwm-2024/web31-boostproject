/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: (config) => {
    config.css = {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    };
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['blockly'],
    };
    return config;
  },
};
export default config;
