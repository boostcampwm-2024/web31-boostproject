import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceContainer } from './WorkspaceContainer';

const meta: Meta<typeof WorkspaceContainer> = {
  title: 'widgets/home/WorkspaceContainer',
  component: WorkspaceContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceContainer>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
