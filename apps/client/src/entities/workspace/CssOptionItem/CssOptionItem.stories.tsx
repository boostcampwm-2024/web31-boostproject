import { Meta, StoryObj } from '@storybook/react';

import { CssOptionItem } from './CssOptionItem';
import { cssCategoryList } from '@/shared/utils';

const meta: Meta<typeof CssOptionItem> = {
  title: 'entities/workspace/CssOptionItem',
  component: CssOptionItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssOptionItem>;

export const Default: Story = {
  args: {
    cssItem: cssCategoryList[0].items[0],
    index: 0,
  },
};

export const Resize: Story = {
  render: () => {
    return (
      <div style={{ width: '400px', resize: 'horizontal', overflow: 'auto' }}>
        <CssOptionItem cssItem={cssCategoryList[0].items[0]} index={0} />
      </div>
    );
  },
};

export const ResizeMultipleItems: Story = {
  render: () => {
    const selectedCssCategory = '레이아웃';
    return (
      <div style={{ width: '400px', resize: 'horizontal', overflow: 'auto' }}>
        {cssCategoryList
          .filter((cssCategory) => cssCategory.category === selectedCssCategory)
          .map((cssCategory) =>
            cssCategory.items.map((cssItem, index) => (
              <CssOptionItem cssItem={cssItem} index={index} key={cssItem.label} />
            ))
          )}
      </div>
    );
  },
};
