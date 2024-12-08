import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceHeaderButtons } from './WorkspaceHeaderButtons';

const meta: Meta<typeof WorkspaceHeaderButtons> = {
  title: 'entities/workspace/WorkspaceHeaderButtons',
  component: WorkspaceHeaderButtons,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '워크스페이스 헤더 버튼 모음 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceHeaderButtons>;

export const Default: Story = {};
