import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceItem } from './WorkspaceItem';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof WorkspaceItem> = {
  title: 'entities/home/WorkspaceItem',
  component: WorkspaceItem,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceItem>;

export const Default: Story = {
  args: {
    workspaceId: '4ddcbf25-acb0-42cd-8a97-aeda515e26db',
    title: '스토리북용 워크스페이스',
    thumbnail: '',
    lastEdited: '2024-11-28T09:34:45.106+00:00',
    onClick: () => {
      action('workspaceItem clicked')();
    },
  },
  render: (args) => (
    <ul>
      <WorkspaceItem {...args} />
    </ul>
  ),
};
