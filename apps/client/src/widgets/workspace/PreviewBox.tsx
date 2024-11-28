import { useState } from 'react';
import { useResetCssStore } from '@/shared/store';
import { resetCss } from '@/shared/utils/resetCss';
import CopyIcon from '@/shared/assets/code_copy.svg?react';
import toast from 'react-hot-toast';
import { CodeViewer } from '@/shared/code-highlighter';

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

  // TODO: 상수 분리한 후 재사용성 높이기
  /* eslint-disable */
  const copyToClipboard = async (copyText: string, label: string) => {
    try {
      await navigator.clipboard.writeText(copyText);
      toast.success(`${label} 코드가 복사되었습니다.`);
    } catch (err) {
      toast.error(`${label} 코드 복사에 실패했습니다.`);
    }
  };

  const handleCopy = () => {
    const codeToCopy = activeTab === 'html' ? htmlCode : cssCode;
    const label = activeTab.toUpperCase();
    copyToClipboard(codeToCopy, label);
  };

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
      <div className="relative min-h-[20rem]">
        {(activeTab === 'html' || activeTab === 'css') && (
          <div className="absolute right-4 top-5 z-50">
            <CopyIcon
              className="h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500"
              onClick={handleCopy}
            />
          </div>
        )}

        {/* TODO: 코드 수정 금지 [논의 필요] */}
        {activeTab === 'preview' && (
          <iframe srcDoc={totalCode} className="h-full w-full" title="Preview" sandbox=""></iframe>
        )}
        {activeTab === 'html' && <CodeViewer code={htmlCode} type="html" theme="light" />}
        {activeTab === 'css' && <CodeViewer code={cssCode} type="css" theme="dark" />}
      </div>
    </section>
  );
};
