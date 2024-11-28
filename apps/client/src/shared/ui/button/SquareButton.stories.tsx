import { Meta, StoryObj } from '@storybook/react';

import { SquareButton } from './SquareButton';
import { action } from '@storybook/addon-actions';

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

export const Default: Story = {
  args: {
    children: <p>버튼</p>,
    variant: 'neutral',
    onClick: action('버튼 클릭'),
    isDisabled: false,
  },
};
