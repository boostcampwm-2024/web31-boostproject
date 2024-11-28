import { Meta, StoryObj } from '@storybook/react';
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

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
