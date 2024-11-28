import { Meta, StoryObj } from '@storybook/react';
import { SaveButton } from './SaveButton';

const meta: Meta<typeof SaveButton> = {
  title: 'Category/SaveButton',
  component: SaveButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SaveButton>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
