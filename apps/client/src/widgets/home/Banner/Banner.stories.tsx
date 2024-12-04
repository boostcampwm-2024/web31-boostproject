import { Meta, StoryObj } from '@storybook/react';

import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'widgets/home/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '메인홈페이지 배너',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {};
