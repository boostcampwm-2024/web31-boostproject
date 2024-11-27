import { Meta, StoryObj } from '@storybook/react';
import { SquareButton } from './SquareButton';

const meta: Meta<typeof SquareButton> = {
  title: 'shared/ui/button/SquareButton',
  component: SquareButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SquareButton>;

export const Default: Story = {};
