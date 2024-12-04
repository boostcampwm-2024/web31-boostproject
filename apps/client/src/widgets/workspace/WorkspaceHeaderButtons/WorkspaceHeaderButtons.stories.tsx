import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceHeaderButtons } from './WorkspaceHeaderButtons';
import { ImageTagModalListItem } from '@/entities';

const meta: Meta<typeof WorkspaceHeaderButtons> = {
  title: 'entities/workspace/WorkspaceHeaderButtons',
  component: WorkspaceHeaderButtons,
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

type Story = StoryObj<typeof WorkspaceHeaderButtons>;

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
