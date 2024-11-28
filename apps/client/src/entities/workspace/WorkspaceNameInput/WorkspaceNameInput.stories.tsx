import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceNameInput } from './WorkspaceNameInput';

const meta: Meta<typeof WorkspaceNameInput> = {
  title: 'entities/workspace/WorkspaceNameInput',
  component: WorkspaceNameInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceNameInput>;

export const Default: Story = {};
