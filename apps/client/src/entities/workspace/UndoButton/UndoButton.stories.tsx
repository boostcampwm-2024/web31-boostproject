import { Meta, StoryObj } from '@storybook/react';
import { UndoButton } from './UndoButton';

const meta: Meta<typeof UndoButton> = {
  title: 'Category/UndoButton',
  component: UndoButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UndoButton>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
