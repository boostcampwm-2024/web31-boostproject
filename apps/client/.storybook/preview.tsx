import '../src/app/index.css';

import { withQueryClient } from './decorators/QueryProvider';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withQueryClient],
};

export default preview;
