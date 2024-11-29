import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceAddBtn } from './WorkspaceAddBtn';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof WorkspaceAddBtn> = {
  title: 'entities/home/WorkspaceAddBtn',
  component: WorkspaceAddBtn,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div onClick={action('WorkspaceAdd Button clicked')}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceAddBtn>;

export const Default: Story = {};
