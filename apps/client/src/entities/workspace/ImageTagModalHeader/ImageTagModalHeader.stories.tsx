import { Meta, StoryObj } from '@storybook/react';

import { ImageTagModalHeader } from './ImageTagModalHeader';

const meta: Meta<typeof ImageTagModalHeader> = {
  title: 'entities/workspace/ImageTagModalHeader',
  component: ImageTagModalHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'img 태그 src 속성 적용을 위한 모달창에 사용되는 헤더',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageTagModalHeader>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },
  render: (args) => {
    return (
      <div className="w-80">
        <ImageTagModalHeader onClose={args.onClose} />
      </div>
    );
  },
};
