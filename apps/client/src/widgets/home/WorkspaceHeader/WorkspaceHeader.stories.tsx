import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceHeader } from './WorkspaceHeader';

const meta: Meta<typeof WorkspaceHeader> = {
  title: 'widgets/home/WorkspaceHeader',
  component: WorkspaceHeader,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceHeader>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
