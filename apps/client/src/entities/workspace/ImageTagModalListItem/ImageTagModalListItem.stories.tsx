import { Meta, StoryObj } from '@storybook/react';

import { ImageTagModalListItem } from '../ImageTagModalListItem/ImageTagModalListItem';
import { useState } from 'react';

const meta: Meta<typeof ImageTagModalListItem> = {
  title: 'entities/workspace/ImageTagModalListItem',
  component: ImageTagModalListItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'img 태그 src 속성 적용을 위한 모달창에 사용되는 이미지 리스트 아이템 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageTagModalListItem>;

export const Default: Story = {
  args: {
    isSelected: false,
    onDeleteImage: () => {},
    onSelectImage: () => {},
    filename: 'logo.png',
  },
  render: (args) => {
    return (
      <ImageTagModalListItem
        isSelected={args.isSelected}
        onDeleteImage={args.onDeleteImage}
        onSelectImage={args.onSelectImage}
        filename={args.filename}
      />
    );
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
    onDeleteImage: () => {},
    onSelectImage: () => {},
    filename: 'logo.png',
  },
  render: (args) => {
    return (
      <ImageTagModalListItem
        isSelected={args.isSelected}
        onDeleteImage={args.onDeleteImage}
        onSelectImage={args.onSelectImage}
        filename={args.filename}
      />
    );
  },
};

export const ActiveAndResize: Story = {
  args: {
    isSelected: false,
    onDeleteImage: () => {},
    onSelectImage: () => {},
    filename: 'logo.png',
  },
  render: (args) => {
    const [isSelected, setIsSelected] = useState<boolean>(args.isSelected);

    return (
      <div style={{ width: '400px', resize: 'horizontal', overflow: 'auto' }}>
        <ImageTagModalListItem
          isSelected={isSelected}
          onDeleteImage={args.onDeleteImage}
          onSelectImage={() => setIsSelected(!isSelected)}
          filename={args.filename}
        />
      </div>
    );
  },
};
