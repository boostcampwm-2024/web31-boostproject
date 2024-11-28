import { Meta, StoryObj } from '@storybook/react';
import { RedoButton } from './RedoButton';

const meta: Meta<typeof RedoButton> = {
  title: 'Category/RedoButton',
  component: RedoButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RedoButton>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
