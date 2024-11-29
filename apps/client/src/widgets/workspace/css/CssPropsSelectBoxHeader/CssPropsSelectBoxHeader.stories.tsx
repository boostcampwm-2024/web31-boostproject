import { Meta, StoryObj } from '@storybook/react';

import { CssPropsSelectBoxHeader } from './CssPropsSelectBoxHeader';
import { useClassBlockStore } from '@/shared/store';
import { useEffect } from 'react';

const meta: Meta<typeof CssPropsSelectBoxHeader> = {
  title: 'widgets/workspace/css/CssPropsSelectBoxHeader',
  component: CssPropsSelectBoxHeader,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssPropsSelectBoxHeader>;

export const Default: Story = {
  args: {
    // 필요한 args를 여기에 추가하세요
  },
};

export const Resize: Story = {
  render: () => (
    <div
      style={{ width: '400px', resize: 'horizontal', overflow: 'auto', border: '1px solid #ccc' }}
      className="p-4"
    >
      <CssPropsSelectBoxHeader />
    </div>
  ),
};

export const ResizeAndCanSelectClass: Story = {
  render: () => {
    const { addClassBlock } = useClassBlockStore();
    useEffect(() => {
      addClassBlock('test1');
      addClassBlock('test2');
      addClassBlock('test3');
    }, []);
    return (
      <div
        style={{ width: '400px', resize: 'horizontal', overflow: 'auto', border: '1px solid #ccc' }}
        className="p-4"
      >
        <CssPropsSelectBoxHeader />
      </div>
    );
  },
};
