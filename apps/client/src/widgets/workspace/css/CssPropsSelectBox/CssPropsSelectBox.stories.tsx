import { Meta, StoryObj } from '@storybook/react';

import { CssPropsSelectBox } from './CssPropsSelectBox';
import { useClassBlockStore } from '@/shared/store';

const meta: Meta<typeof CssPropsSelectBox> = {
  title: 'widgets/workspace/css/CssPropsSelectBox',
  component: CssPropsSelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssPropsSelectBox>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};

export const CanSelectClass: Story = {
  render: () => {
    const { addClassBlock, classBlockList } = useClassBlockStore();

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value === '' || classBlockList.includes(e.target.value)) return;
      addClassBlock(e.target.value);
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.currentTarget.blur();
        e.preventDefault();
      }
    };

    return (
      <div className="flex flex-col gap-3">
        <input
          className="w-full border p-2 focus:outline-none"
          type="text"
          onBlur={handleOnBlur}
          onKeyDown={handleOnKeyDown}
          placeholder="추가하고자 하는 CSS 클래스를 입력하세요"
        />
        <CssPropsSelectBox />
      </div>
    );
  },
};
