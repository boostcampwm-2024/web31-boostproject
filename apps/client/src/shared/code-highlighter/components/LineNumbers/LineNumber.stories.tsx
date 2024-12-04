import { Meta, StoryObj } from '@storybook/react';

import { LineNumbers } from './LineNumbers';

const meta: Meta<typeof LineNumbers> = {
  title: 'shared/code-highlighter/LineNumbers',
  component: LineNumbers,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LineNumbers>;

export const Default: Story = {
  args: {
    codeLineList: ['line1', 'line2', 'line3'],
  },
};
