import { Meta, StoryObj } from '@storybook/react';

import { CodeViewer } from './CodeViewer';

const meta: Meta<typeof CodeViewer> = {
  title: 'shared/code-highlighter/CodeViewer',
  component: CodeViewer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CodeViewer>;

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
    type: 'html',
    theme: 'light',
  },
};

export const DarkThemeHTML: Story = {
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
    type: 'html',
    theme: 'dark',
  },
};

export const LightThemeCss: Story = {
  args: {
    code: `.title {
    background-color: red;
  }
  .content {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Arial';
    color: #000;
  }  
  `,
    type: 'css',
    theme: 'light',
  },
};

export const DarkThemeCss: Story = {
  args: {
    code: `.title {
    background-color: red;
  }
  .content {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Arial';
    color: #000;
  }  
  `,
    type: 'css',
    theme: 'dark',
  },
};
