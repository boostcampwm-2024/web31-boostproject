import { Meta, StoryObj } from '@storybook/react';

import { CircleButton } from './CircleButton';
import PlusIcon from '@/shared/assets/plus.svg?react';
import { action } from '@storybook/addon-actions';

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
    children: <PlusIcon />,
    width: 'w-10',
    height: 'h-10',
    disable: false,
    onClick: action('버튼 클릭'),
  },
};
