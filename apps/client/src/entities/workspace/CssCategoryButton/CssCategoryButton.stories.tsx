import { Meta, StoryObj } from '@storybook/react';

import { CssCategoryButton } from './CssCategoryButton';
import { useCssPropsStore } from '@/shared/store';

const meta: Meta<typeof CssCategoryButton> = {
  title: 'entities/workspace/CssCateGoryButton',
  component: CssCategoryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssCategoryButton>;

export const Default: Story = {
  args: {
    cssCategory: '레이아웃',
  },
  render: (args) => {
    const { selectedCssCategory } = useCssPropsStore();
    return (
      <div className="flex items-center gap-5">
        <p>현재 선택된 카테고리 : {selectedCssCategory}</p>
        <CssCategoryButton cssCategory={args.cssCategory} />
      </div>
    );
  },
};
