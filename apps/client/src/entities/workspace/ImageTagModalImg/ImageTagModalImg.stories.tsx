import { Meta, StoryObj } from '@storybook/react';

import { ImageTagModalImg } from './ImageTagModalImg';

const meta: Meta<typeof ImageTagModalImg> = {
  title: 'entities/workspace/ImageTagModalImg',
  component: ImageTagModalImg,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'img 태그 src 속성 적용을 위한 모달창에 사용되는 이미지 미리보기 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageTagModalImg>;

export const Default: Story = {
  args: {
    imageSrc: `${import.meta.env.VITE_STATIC_STORAGE_URL}boolock_logo.png`,
  },
  render: (args) => {
    return (
      <div className="h-32 w-32">
        <ImageTagModalImg imageSrc={args.imageSrc} />
      </div>
    );
  },
};
