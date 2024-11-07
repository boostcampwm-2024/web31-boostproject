import { Meta, StoryObj } from '@storybook/react';
import { EmptyWorkspace } from './EmptyWorkspace';

const meta: Meta<typeof EmptyWorkspace> = {
  title: 'widgets/EmptyWorkspace',
  component: EmptyWorkspace,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyWorkspace>;

export const Default: Story = {};
