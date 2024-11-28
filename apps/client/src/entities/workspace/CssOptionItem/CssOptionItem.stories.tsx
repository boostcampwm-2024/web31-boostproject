import { Meta, StoryObj } from '@storybook/react';

import { CssOptionItem } from './CssOptionItem';

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
    // propsname: value,
  },
};
