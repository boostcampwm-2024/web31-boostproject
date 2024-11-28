import { Meta, StoryObj } from '@storybook/react';

import { CircleButton } from './CircleButton';

const meta: Meta<typeof CircleButton> = {
  title: 'shared/ui/button/CircleButton',
  component: CircleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CircleButton>;

export const Default: Story = {
  args: {
    children: '+',
    width: 'w-10',
    height: 'h-10',
    disable: false,
  },
};
