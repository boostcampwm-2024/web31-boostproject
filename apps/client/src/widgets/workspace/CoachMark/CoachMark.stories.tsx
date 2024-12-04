import { Meta, StoryObj } from '@storybook/react';

import coachMark from './CoachMark';

const meta: Meta<typeof coachMark> = {
  title: 'widgets/workspace/coachMark',
  component: coachMark,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '워크스페이스 튜토리얼 코치 마크',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof coachMark>;

export const Default: Story = {};
