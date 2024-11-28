import styles from './CodeViewer.module.css';
import { parseHighlightCss } from './parseHighlightCss';
import { parseHighlightHtml } from './parseHighlightHtml';
import { useState } from 'react';

type CodeViewerProps = {
  code: string;
  type: 'html' | 'css';
  theme?: 'light' | 'dark';
};

export const CodeViewer = ({ code, type, theme }: CodeViewerProps) => {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const parsedCode =
    type === 'html' ? parseHighlightHtml(code, styles) : parseHighlightCss(code, styles);

  const handleMouseEnter = (lineNumber: number) => {
    setSelectedLine(lineNumber);
  };

  const handleMouseLeave = () => {
    setSelectedLine(null);
  };

  return (
    <div className={`${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      {/* 라인 번호 영역 */}
      <div className={styles.lineNumbers}>
        {parsedCode.split('\n').map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            className={`${styles.lineNumber} ${selectedLine === index + 1 ? styles.lineHighlight : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {/* 코드 영역 */}
      <div className={styles.codeContent}>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: parsedCode }} />
        </pre>
      </div>
    </div>
  );
};
