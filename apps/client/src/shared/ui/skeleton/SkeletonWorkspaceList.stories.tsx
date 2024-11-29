import { Meta, StoryObj } from '@storybook/react';
import { SkeletonWorkspaceList } from './SkeletonWorkspaceList';

const meta: Meta<typeof SkeletonWorkspaceList> = {
  title: 'shared/ui/skeleton/SkeletonWorkspaceList',
  component: SkeletonWorkspaceList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SkeletonWorkspaceList>;

export const Default: Story = {};
