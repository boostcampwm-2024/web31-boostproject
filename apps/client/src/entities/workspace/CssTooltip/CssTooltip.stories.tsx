import { Meta, StoryObj } from '@storybook/react';
import { CssTooltip } from './CssTooltip';

const meta: Meta<typeof CssTooltip> = {
  title: 'Category/CssTooltip',
  component: CssTooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssTooltip>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
