import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceList } from './WorkspaceList';
import { getUserId } from '@/shared/utils';
import { v4 } from 'uuid';

const meta: Meta<typeof WorkspaceList> = {
  title: 'widgets/home/WorkspaceList',
  component: WorkspaceList,
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

type Story = StoryObj<typeof WorkspaceList>;

export const Default: Story = {
  args: {
    workspaceList: [
      {
        name: 'Workspace 1',
        updated_at: new Date().toISOString(),
        user_id: getUserId(),
        workspace_id: v4(),
        isCssReset: false,
        thumbnail: '',
        totalTotalCssPropertyObj: {
          example: {
            checkedCssPropertyObj: {},
            cssOptionObj: {},
          },
        },
      },
    ],
  },
};

export const MultipleItems: Story = {
  args: {
    workspaceList: Array.from({ length: 4 }).map((_, idx) => {
      return {
        name: `Workspace ${idx}`,
        updated_at: new Date().toISOString(),
        user_id: getUserId(),
        workspace_id: v4(),
        isCssReset: false,
        thumbnail: '',
        totalTotalCssPropertyObj: {
          example: {
            checkedCssPropertyObj: {},
            cssOptionObj: {},
          },
        },
      };
    }),
  },
};
