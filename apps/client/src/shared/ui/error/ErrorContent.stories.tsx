import { Meta, StoryObj } from '@storybook/react';

import { ErrorContent } from './ErrorContent';

const meta: Meta<typeof ErrorContent> = {
  title: 'shared/ui/error/ErrorContent',
  component: ErrorContent,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex h-screen w-screen flex-1">
          <Story />
        </div>
      );
    },
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ErrorContent>;

export const Default: Story = {
  args: {
    description: '에러아님 ㅋ',
  },
};
