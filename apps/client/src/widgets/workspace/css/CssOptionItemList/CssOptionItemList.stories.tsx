import { Meta, StoryObj } from '@storybook/react';

import { CssOptionItemList } from './CssOptionItemList';
import { useCssPropsStore } from '@/shared/store';

const meta: Meta<typeof CssOptionItemList> = {
  title: 'widgets/workspace/css/CssOptionItemList',
  component: CssOptionItemList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssOptionItemList>;

export const Default: Story = {};

export const ClassSelected: Story = {
  render: () => {
    const { setSelectedCssCategory } = useCssPropsStore();
    const categoryList = [
      '레이아웃',
      '박스모델',
      '타이포그래피',
      '배경',
      '테두리',
      '간격',
      'flex 속성',
      'grid 속성',
    ];
    return (
      <>
        <select onChange={(e) => setSelectedCssCategory(e.target.value)}>
          {categoryList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <CssOptionItemList />
      </>
    );
  },
};
