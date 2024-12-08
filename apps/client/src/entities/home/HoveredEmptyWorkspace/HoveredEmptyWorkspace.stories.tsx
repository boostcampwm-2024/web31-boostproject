import { Meta, StoryObj } from '@storybook/react';

import { HoveredEmptyWorkspace } from './HoveredEmptyWorkspace';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof HoveredEmptyWorkspace> = {
  title: 'entities/home/HoveredEmptyWorkspace',
  component: HoveredEmptyWorkspace,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div onClick={action('HoveredEmptyWorkspace clicked')}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HoveredEmptyWorkspace>;

export const Default: Story = {};
