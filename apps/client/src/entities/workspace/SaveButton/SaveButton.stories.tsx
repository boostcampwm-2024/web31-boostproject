import { Meta, StoryObj } from '@storybook/react';

import { SaveButton } from './SaveButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof SaveButton> = {
  title: 'Category/SaveButton',
  component: SaveButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        action('save button clicked')();
      };
      return (
        <div onClick={handleClick}>
          <Story />
        </div>
      );
    },
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SaveButton>;

export const Default: Story = {};
