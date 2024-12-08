import { Meta, StoryObj } from '@storybook/react';

import { NotFound } from './NotFound';

const meta: Meta<typeof NotFound> = {
  title: 'pages/NotFound',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
