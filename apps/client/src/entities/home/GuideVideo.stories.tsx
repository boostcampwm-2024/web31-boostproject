import { Meta, StoryObj } from '@storybook/react';
import { GuideVideo } from './GuideVideo';

const meta: Meta<typeof GuideVideo> = {
  title: 'entities/home/GuideVideo',
  component: GuideVideo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    videoId: {
      control: 'text',
      description: '유투브 영상 ID',
      defaultValue: 'dQw4w9WgXcQ',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GuideVideo>;

export const Default: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
  },
};
