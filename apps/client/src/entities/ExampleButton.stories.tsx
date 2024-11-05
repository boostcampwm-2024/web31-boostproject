import { Meta, StoryObj } from '@storybook/react';
import ExampleButton from './ExampleButton';
import { fn } from '@storybook/test';

export const meta: Meta<typeof ExampleButton> = {
  title: 'Button/ExampleButton',
  component: ExampleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

type Story = StoryObj<typeof ExampleButton>;

export const Default: Story = {
  args: {
    label: '기본 버튼',
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화 버튼',
    isDisabled: true,
  },
};
