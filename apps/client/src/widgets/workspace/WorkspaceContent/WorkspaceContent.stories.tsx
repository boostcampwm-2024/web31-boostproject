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
        <div id="blocklyDiv" style={{ height: '100vh', width: '100vw' }}>
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
