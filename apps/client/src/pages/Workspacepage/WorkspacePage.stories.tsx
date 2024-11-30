import { Meta, StoryObj } from '@storybook/react';

import { WorkspacePage } from './WorkspacePage';

const meta: Meta<typeof WorkspacePage> = {
  title: 'pages/WorkspacePage',
  component: WorkspacePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-screen">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspacePage>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
