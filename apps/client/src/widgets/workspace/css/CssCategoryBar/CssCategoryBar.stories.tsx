import { Meta, StoryObj } from '@storybook/react';

import { CssCategoryBar } from './CssCategoryBar';

const meta: Meta<typeof CssCategoryBar> = {
  title: 'widgets/workspace/css/CssCategoryBar',
  component: CssCategoryBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssCategoryBar>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
