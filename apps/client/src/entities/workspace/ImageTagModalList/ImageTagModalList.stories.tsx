import { Meta, StoryObj } from '@storybook/react';

import { ImageTagModalList } from './ImageTagModalList';
import { useState } from 'react';
import { useImageModalStore } from '@/shared/store';

const meta: Meta<typeof ImageTagModalList> = {
  title: 'entities/workspace/ImageTagModalList',
  component: ImageTagModalList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'img 태그 src 속성 적용을 위한 모달창에 사용되는 이미지 리스트 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageTagModalList>;

export const Default: Story = {
  args: {
    tagSrc: '/mock/image2.png',
    onSetTagSrc: () => {},
  },
  render: (args) => {
    const [tagSrc, setTagSrc] = useState(args.tagSrc);
    const mockImageList = new Map([
      ['example1<png', '/mock/image1.png'],
      ['example2<png', '/mock/image2.png'],
      ['example3<png', '/mock/image3.png'],
      ['example4<png', '/mock/image4.png'],
      ['example5<png', '/mock/image5.png'],
    ]);

    const imageList = JSON.stringify(Object.fromEntries(mockImageList));

    const { setInitialImageList } = useImageModalStore.getState();
    setInitialImageList(imageList);

    return (
      <div className="h-[32rem]">
        <ImageTagModalList tagSrc={tagSrc} onSetTagSrc={setTagSrc} />
      </div>
    );
  },
};
