import { Meta, StoryObj } from '@storybook/react';

import { WorkspacePageHeader } from './WorkspacePageHeader';

const meta: Meta<typeof WorkspacePageHeader> = {
  title: 'widgets/workspace/WorkspacePageHeader',
  component: WorkspacePageHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspacePageHeader>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
