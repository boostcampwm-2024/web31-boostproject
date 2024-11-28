import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceContent } from './WorkspaceContent';

const meta: Meta<typeof WorkspaceContent> = {
  title: 'widgets/workspace/WorkspaceContent',
  component: WorkspaceContent,
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

type Story = StoryObj<typeof WorkspaceContent>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
