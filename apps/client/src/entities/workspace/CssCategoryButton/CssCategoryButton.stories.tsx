import { Meta, StoryObj } from '@storybook/react';

import { CssCategoryButton } from './CssCategoryButton';

const meta: Meta<typeof CssCategoryButton> = {
  title: 'Category/CssCateGoryButtonProps',
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
    return (
      <div className="flex gap-5">
        <CssCategoryButton cssCategory={args.cssCategory} />
        <CssCategoryButton cssCategory={'타이포그래피'} />
      </div>
    );
  },
};
