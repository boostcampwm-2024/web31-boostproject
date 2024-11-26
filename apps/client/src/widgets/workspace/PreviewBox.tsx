import { useState } from 'react';
import { useResetCssStore } from '@/shared/store';
import { resetCss } from '@/shared/utils/resetCss';

type PreviewBoxProps = {
  htmlCode: string;
  cssCode: string;
};

export const PreviewBox = ({ htmlCode, cssCode }: PreviewBoxProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');
  const { isResetCssChecked } = useResetCssStore();

  const finalCssCode = isResetCssChecked ? `${resetCss}\n${cssCode}` : cssCode;
  const styleCode = `<style>${finalCssCode}</style>`;
  const indexOfHead = htmlCode.indexOf('</head>');
  const totalCode = `${htmlCode.slice(0, indexOfHead)}${styleCode}${htmlCode.slice(indexOfHead)}`;

  return (
    <section className="flex-1 border-b border-gray-100">
      <nav className="flex h-10 border-b border-gray-100">
        <button
          onClick={() => setActiveTab('preview')}
          className={`${activeTab === 'preview' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 border-r border-gray-100 bg-green-500`}
        >
          미리보기
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`${activeTab === 'html' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 border-r border-gray-100 bg-green-500`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`${activeTab === 'css' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 bg-green-500`}
        >
          CSS
        </button>
      </nav>
      <div className="min-h-[20rem]">
        {activeTab === 'preview' && (
          <iframe srcDoc={totalCode} className="h-full w-full" title="Preview"></iframe>
        )}
        {activeTab === 'html' && <pre className="whitespace-pre-wrap">{htmlCode}</pre>}
        {activeTab === 'css' && <pre className="whitespace-pre-wrap">{cssCode}</pre>}
      </div>
    </section>
  );
};
