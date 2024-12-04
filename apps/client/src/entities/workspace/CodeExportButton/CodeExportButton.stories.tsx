import { Meta, StoryObj } from '@storybook/react';

import { CodeExportButton } from './CodeExportButton';

const meta: Meta<typeof CodeExportButton> = {
  title: 'entities/workspace/CodeExportButton',
  component: CodeExportButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CodeExportButton>;

export const Default: Story = {};
