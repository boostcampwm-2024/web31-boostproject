import { Meta, StoryObj } from '@storybook/react';
import { SkeletonWorkspace } from './SkeletonWorkspace';

const meta: Meta<typeof SkeletonWorkspace> = {
  title: 'shared/ui/skeleton/SkeletonWorkspace',
  component: SkeletonWorkspace,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SkeletonWorkspace>;

export const Default: Story = {};
