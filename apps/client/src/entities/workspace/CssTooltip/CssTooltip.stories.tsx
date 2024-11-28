import { Meta, StoryObj } from '@storybook/react';

import { CssTooltip } from './CssTooltip';
import QuestionIcon from '@/shared/assets/question.svg?react';
import { useState } from 'react';

const meta: Meta<typeof CssTooltip> = {
  title: 'Category/CssTooltip',
  component: CssTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CSS 속성에 관한 정보를 알려주는 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssTooltip>;

export const Default: Story = {
  args: {
    description: 'css 툴팁입니다.',
    isOpen: false,
    leftX: 0,
    topY: 0,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);

    const handleMouseEnter = (e: React.MouseEvent) => {
      setIsOpen(true);
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(e.currentTarget.getBoundingClientRect().y + 8);
    };

    const handleMouseLeave = () => {
      setIsOpen(false);
    };
    return (
      <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} isOpen={isOpen} />
      </div>
    );
  },
};

export const ScreenOverflow: Story = {
  args: {
    description: 'css 툴팁입니다.',
    isOpen: false,
    leftX: 0,
    topY: 0,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);

    const handleMouseEnter = (e: React.MouseEvent) => {
      setIsOpen(true);
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(-e.currentTarget.getBoundingClientRect().y + 40);
    };

    const handleMouseLeave = () => {
      setIsOpen(false);
    };
    return (
      <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} isOpen={isOpen} />
      </div>
    );
  },
};
