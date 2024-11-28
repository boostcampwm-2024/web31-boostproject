import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceLoadError } from './WorkspaceLoadError';

const meta: Meta<typeof WorkspaceLoadError> = {
  title: 'entities/home/WorkspaceLoadError',
  component: WorkspaceLoadError,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceLoadError>;

export const Default: Story = {};
