import { Meta, StoryObj } from '@storybook/react';

import { NotHoveredEmptyWorkspace } from './NotHoveredEmptyWorkspace';

const meta: Meta<typeof NotHoveredEmptyWorkspace> = {
  title: 'entities/home/NotHoveredEmptyWorkspace',
  component: NotHoveredEmptyWorkspace,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NotHoveredEmptyWorkspace>;

export const Default: Story = {};
