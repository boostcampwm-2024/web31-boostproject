import { Meta, StoryObj } from '@storybook/react';

import { HomeHeader } from './HomeHeader';

const meta: Meta<typeof HomeHeader> = {
  title: 'widgets/home/HomeHeader',
  component: HomeHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};

export const Dark: Story = {
  args: {
    isBlack: true,
  },
};
