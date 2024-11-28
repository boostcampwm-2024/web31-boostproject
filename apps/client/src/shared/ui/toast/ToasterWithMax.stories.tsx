import { Meta, StoryObj } from '@storybook/react';
import toast from 'react-hot-toast';
import { ToasterWithMax } from './ToasterWithMax';

const meta: Meta<typeof ToasterWithMax> = {
  title: 'shared/ui/toast/ToasterWithMax',
  component: ToasterWithMax,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToasterWithMax>;

export const Default: Story = {
  render: () => (
    <>
      <ToasterWithMax />
      <div className="mt-20 flex flex-col items-center gap-4">
        <button
          onClick={() => toast('This is a default message!')}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Default Toast
        </button>
      </div>
    </>
  ),
};

export const Success: Story = {
  render: () => (
    <>
      <ToasterWithMax />
      <div className="mt-20 flex flex-col items-center gap-4">
        <button
          onClick={() => toast.success('This is a success message!')}
          className="rounded bg-green-500 px-4 py-2 text-white"
        >
          Success Toast
        </button>
      </div>
    </>
  ),
};

export const Fail: Story = {
  render: () => (
    <>
      <ToasterWithMax />
      <div className="mt-20 flex flex-col items-center gap-4">
        <button
          onClick={() => toast.error('This is an fail message!')}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Fail Toast
        </button>
      </div>
    </>
  ),
};
