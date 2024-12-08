import { useEffect, useRef, useState } from 'react';
import { useIframeStore, useResetCssStore } from '@/shared/store';

import { CodeViewer } from '@/shared/code-highlighter';
import CopyIcon from '@/shared/assets/code_copy.svg?react';
import { resetCss } from '@/shared/utils/resetCss';
import toast from 'react-hot-toast';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

type PreviewBoxProps = {
  htmlCode: string;
  cssCode: string;
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
  selectedBlockType?: string | null;
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
  selectedBlockType,
}: PreviewBoxProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');
  const { isResetCssChecked } = useResetCssStore();
  const { currentStep } = useCoachMarkStore();
  const { setIframeRef } = useIframeStore();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const googleFontsLinksCode = `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `;
  const finalCssCode = isResetCssChecked ? `${resetCss}\n${cssCode}` : cssCode;
  const styleCode = `<style> * { box-sizing : border-box; margin : 0; padding : 0; ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #cdd9e4; border-radius: 4px; } } html, head, body { width : 100%; height : 100%;  } ${finalCssCode}</style>`;
  const indexOfHead = htmlCode.indexOf('</head>');
  const totalCode = `${htmlCode.slice(0, indexOfHead)}${googleFontsLinksCode}${styleCode}${htmlCode.slice(indexOfHead)}`;

  useEffect(() => {
    if (iframeRef.current) {
      setIframeRef(iframeRef);
    }
  }, [iframeRef]);

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
    // TODO: 사용자가이드 - 겹치는 현상
    <section
      className={`flex h-[calc(100vh-475px)] flex-1 flex-col border-b border-gray-100 ${currentStep === 3 ? 'z-[200]' : ''}`}
    >
      <nav className="flex h-10 border-b border-gray-100">
        <button
          onClick={() => setActiveTab('preview')}
          className={`${activeTab === 'preview' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 border-r border-gray-100 bg-green-500`}
          aria-label="미리보기 탭 버튼"
        >
          미리보기
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`${activeTab === 'html' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 border-r border-gray-100 bg-green-500`}
          aria-label="HTML 탭 버튼"
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`${activeTab === 'css' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 bg-green-500`}
          aria-label="CSS 탭 버튼"
        >
          CSS
        </button>
      </nav>
      <div className="relative flex-1 overflow-hidden">
        {(activeTab === 'html' || activeTab === 'css') && (
          <div className="absolute right-4 top-5 z-50">
            <CopyIcon
              className="h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500"
              onClick={handleCopy}
              aria-label="코드 복사 버튼"
            />
          </div>
        )}

        {activeTab === 'preview' && (
          <iframe
            ref={iframeRef}
            srcDoc={totalCode}
            className="h-full w-full"
            title="Preview"
            sandbox="allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation"
          ></iframe>
        )}
        {activeTab === 'html' && (
          <CodeViewer
            code={activeTab === 'html' ? htmlCode : cssCode}
            type={activeTab}
            theme="light"
            selectedBlockStartLine={selectedBlockStartLine}
            selectedBlockLength={selectedBlockLength}
            selectedBlockType={selectedBlockType}
          />
        )}
        {activeTab === 'css' && (
          <CodeViewer
            code={cssCode}
            type="css"
            theme="light"
            selectedBlockType={selectedBlockType}
          />
        )}
      </div>
    </section>
  );
};
