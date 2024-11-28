import styles from './CodeViewer.module.css';
import { parseHighlightCss } from './parseHighlightCss';
import { parseHighlightHtml } from './parseHighlightHtml';
import { useEffect, useRef, useState } from 'react';

type CodeViewerProps = {
  code: string;
  type: 'html' | 'css';
  theme?: 'light' | 'dark';
};

export const CodeViewer = ({ code, type, theme }: CodeViewerProps) => {
  const [previousCodeLines, setPreviousCodeLines] = useState<string[]>([]);
  const [highlightedLines, setHighlightedLines] = useState<number[]>([]);
  const [hoveredLineNumber, setHoveredLineNumber] = useState<number | null>(null);

  const codeRef = useRef<HTMLDivElement>(null);
  const parsedCode =
    type === 'html' ? parseHighlightHtml(code, styles) : parseHighlightCss(code, styles);
  const codeLineList = parsedCode.split('\n').filter((line) => line.trim() !== '');

  // 수정된 코드 애니메이션 효과
  useEffect(() => {
    const newLineList: number[] = [];

    codeLineList.forEach((line, index) => {
      if (!previousCodeLines[index] || previousCodeLines[index] !== line) {
        newLineList.push(index);
      }
    });

    setHighlightedLines(newLineList);

    // 애니메이션이 끝난 후 강조 제거
    const timeout = setTimeout(() => setHighlightedLines([]), 1000);

    setPreviousCodeLines(codeLineList);

    return () => clearTimeout(timeout);
  }, [code]);

  // 마우스 enter, leave 색상 변화
  const handleMouseEnter = (lineNumber: number) => {
    setHoveredLineNumber(lineNumber);
  };

  const handleMouseLeave = () => {
    setHoveredLineNumber(null);
  };

  return (
    <div className={`${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      {/* 라인 번호 영역 */}
      <div className={styles.lineNumbers}>
        {codeLineList.map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            className={`${styles.lineNumber} ${hoveredLineNumber === index + 1 ? styles.lineHighlight : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {/* 코드 영역 */}
      <div className={styles.codeContent} ref={codeRef}>
        <pre>
          <code>
            {codeLineList.map((line, index) => (
              <div
                key={index}
                className={highlightedLines.includes(index) ? styles.newLine : ''}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};
