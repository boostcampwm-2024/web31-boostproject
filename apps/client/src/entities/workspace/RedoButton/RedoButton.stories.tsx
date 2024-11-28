import { Meta, StoryObj } from '@storybook/react';

import { RedoButton } from './RedoButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof RedoButton> = {
  title: 'entities/workspace/RedoButton',
  component: RedoButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        action('redo button clicked')();
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

type Story = StoryObj<typeof RedoButton>;

export const Default: Story = {};
