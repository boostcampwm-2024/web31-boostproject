import '../src/app/index.css';

import { withMemoryRouter } from './decorators/MemoryRouterProvider';
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
  decorators: [withQueryClient, withMemoryRouter],
};

export default preview;
