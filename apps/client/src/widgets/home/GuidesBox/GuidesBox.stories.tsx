import { Meta, StoryObj } from '@storybook/react';

import { GuidesBox } from './GuidesBox';

const meta: Meta<typeof GuidesBox> = {
  title: 'widgets/home/GuidesBox',
  component: GuidesBox,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GuidesBox>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
