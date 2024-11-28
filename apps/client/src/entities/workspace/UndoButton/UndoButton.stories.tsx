import { Meta, StoryObj } from '@storybook/react';

import { UndoButton } from './UndoButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof UndoButton> = {
  title: 'entities/workspace/UndoButton',
  component: UndoButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        action('undo button clicked')();
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

type Story = StoryObj<typeof UndoButton>;

export const Default: Story = {};
