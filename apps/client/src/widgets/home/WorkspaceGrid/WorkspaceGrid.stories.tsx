import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceGrid } from './WorkspaceGrid';
import { WorkspaceItem } from '@/entities';
import { action } from '@storybook/addon-actions';
import { v4 } from 'uuid';

const meta: Meta<typeof WorkspaceGrid> = {
  title: 'widgets/home/WorkspaceGrid',
  component: WorkspaceGrid,
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

type Story = StoryObj<typeof WorkspaceGrid>;

export const Default: Story = {
  args: {
    children: (
      <WorkspaceItem
        workspaceId={v4()}
        title="예시 1"
        thumbnail=""
        lastEdited={new Date().toISOString()}
        onClick={() => {
          action('workspaceItem clicked')();
        }}
      />
    ),
  },
};

export const MultipleItems: Story = {
  render: () => {
    const workspaceItemList = [
      {
        workspaceId: '1234',
        title: '예시 1',
        thumbnail: '',
        lastEdited: '2024-11-28T09:34:45.106+00:00',
      },
      {
        workspaceId: '1234',
        title: '예시 2',
        thumbnail: '',
        lastEdited: '2024-11-28T09:34:45.106+00:00',
      },
      {
        workspaceId: '1234',
        title: '예시 3',
        thumbnail: '',
        lastEdited: '2024-11-28T09:34:45.106+00:00',
      },
      {
        workspaceId: '1234',
        title: '예시 4',
        thumbnail: '',
        lastEdited: '2024-11-28T09:34:45.106+00:00',
      },
      {
        workspaceId: '1234',
        title: '예시 5',
        thumbnail: '',
        lastEdited: '2024-11-28T09:34:45.106+00:00',
      },
    ];
    return (
      <WorkspaceGrid>
        {workspaceItemList.map((workspaceItem) => (
          <WorkspaceItem
            key={workspaceItem.workspaceId}
            {...workspaceItem}
            onClick={() => {
              action('workspaceItem clicked')();
            }}
          />
        ))}
      </WorkspaceGrid>
    );
  },
};
