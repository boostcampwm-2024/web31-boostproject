import { Meta, StoryObj } from '@storybook/react';

import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex h-screen w-screen flex-1">
          <Story />
        </div>
      );
    },
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {};
