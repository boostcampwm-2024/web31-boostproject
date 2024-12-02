import { useState } from 'react';
import { useResetCssStore } from '@/shared/store';
import { resetCss } from '@/shared/utils/resetCss';
import CopyIcon from '@/shared/assets/code_copy.svg?react';
import toast from 'react-hot-toast';
import { CodeViewer } from '@/shared/code-highlighter';

type PreviewBoxProps = {
  htmlCode: string;
  cssCode: string;
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
};

/**
 *
 * @description
 * 웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트
 */
export const PreviewBox = ({
  htmlCode,
  cssCode,
  selectedBlockStartLine,
  selectedBlockLength,
}: PreviewBoxProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');
  const { isResetCssChecked } = useResetCssStore();

  const googleFontsLinksCode = `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `;
  const finalCssCode = isResetCssChecked ? `${resetCss}\n${cssCode}` : cssCode;
  const styleCode = `<style> * { box-sizing : border-box; margin : 0; padding : 0; } html, head, body { width : 100%; height : 100%; } ${finalCssCode}</style>`;
  const indexOfHead = htmlCode.indexOf('</head>');
  const totalCode = `${htmlCode.slice(0, indexOfHead)}${googleFontsLinksCode}${styleCode}${htmlCode.slice(indexOfHead)}`;

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
      <div className="relative h-full max-h-[calc(100%-26rem)] min-h-[20rem] w-full">
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
          <iframe
            srcDoc={totalCode}
            className="h-full w-full"
            title="Preview"
            sandbox="allow-same-origin"
          ></iframe>
        )}
        {activeTab === 'html' && (
          <CodeViewer
            code={htmlCode}
            type="html"
            theme="light"
            selectedBlockStartLine={selectedBlockStartLine}
            selectedBlockLength={selectedBlockLength}
          />
        )}
        {activeTab === 'css' && <CodeViewer code={cssCode} type="css" theme="light" />}
      </div>
    </section>
  );
};
