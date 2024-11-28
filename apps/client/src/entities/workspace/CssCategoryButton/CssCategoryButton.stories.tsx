import type { Meta, StoryObj } from '@storybook/react';

import { CssCategoryButton } from './CssCategoryButton';

const meta: Meta<typeof CssCategoryButton> = {
  title: 'Category/CssCategoryButton',
  component: CssCategoryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CssCategoryButton>;
// Default state
export const Default: Story = {
  args: {
    cssCategory: {
      category: '레이아웃',
    },
  },
};

// import { Meta, StoryObj } from '@storybook/react';
// import MyComponent from './MyComponent';

// const meta: Meta<typeof MyComponent> = {
//   title: 'Category/MyComponent',
//   component: MyComponent,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
// };

// export default meta;

// type Story = StoryObj<typeof MyComponent>;

// export const Default: Story = {
//   args: {
//     // propsname: value,
//   },
// };
