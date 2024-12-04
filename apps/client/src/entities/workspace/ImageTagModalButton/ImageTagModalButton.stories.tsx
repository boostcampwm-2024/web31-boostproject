import { Meta, StoryObj } from '@storybook/react';

import { ImageTagModalButton } from './ImageTagModalButton';

const meta: Meta<typeof ImageTagModalButton> = {
  title: 'entities/workspace/ImageTagModalButton',
  component: ImageTagModalButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'img 태그 src 속성 적용을 위한 모달창에 사용되는 버튼 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageTagModalButton>;

export const Default: Story = {
  args: {
    content: '이미지 선택하기',
    isBlue: true,
    onClick: () => {},
  },
  render: (args) => {
    return (
      <ImageTagModalButton content={args.content} isBlue={args.isBlue} onClick={args.onClick} />
    );
  },
};

export const Close: Story = {
  args: {
    content: '닫기',
    isBlue: false,
    onClick: () => {},
  },
  render: (args) => {
    return (
      <ImageTagModalButton content={args.content} isBlue={args.isBlue} onClick={args.onClick} />
    );
  },
};
