import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceSampleButton } from './WorkspaceSampleButton';

const meta: Meta<typeof WorkspaceSampleButton> = {
  title: 'entities/home/WorkspaceSampleButton',
  component: WorkspaceSampleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceSampleButton>;

export const Default: Story = {};
