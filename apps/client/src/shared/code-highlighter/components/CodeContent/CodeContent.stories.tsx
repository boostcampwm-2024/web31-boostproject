import { Meta, StoryObj } from '@storybook/react';

import { CodeContent } from './CodeContent';

const meta: Meta<typeof CodeContent> = {
  title: 'shared/code-highlighter/CodeContent',
  component: CodeContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CodeContent>;

export const Default: Story = {
  args: {
    code: `<html>
    <head></head>
    <body>
      <div>
        <h1>title</h1>
        <p>content</p>
      </div>
    </body>
  </html>`,
    codeLineList: [
      '<html>',
      '  <head></head>',
      '  <body>',
      '    <div>',
      '      <h1>title</h1>',
      '      <p>content</p>',
      '    </div>',
      '  </body>',
      '</html>',
    ],
    selectedBlockStartLine: 5,
    selectedBlockLength: 7,
    selectedBlockType: 'BOOLOCK_SYSTEM_html',
  },
};
