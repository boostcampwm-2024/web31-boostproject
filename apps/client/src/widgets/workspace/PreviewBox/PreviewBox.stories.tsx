import { Meta, StoryObj } from '@storybook/react';

import { PreviewBox } from './PreviewBox';

const meta: Meta<typeof PreviewBox> = {
  title: 'widgets/workspace/PreviewBox',
  component: PreviewBox,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PreviewBox>;

export const Default: Story = {
  args: {
    htmlCode: `<html>
      <head></head>
      <body>
        <div class="container">
          <h1 class="title">Hello, world!</h1>
        </div>
      </body>
    </html>`,
    cssCode: `.container {
      background-color: #f0f0f0;
      padding: 1rem;
    }
.title {
      color: #43a135;
      font-size: 2rem;
    }
    `,
  },
};
