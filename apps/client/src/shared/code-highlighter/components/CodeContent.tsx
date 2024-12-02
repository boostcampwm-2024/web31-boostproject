import styles from '../styles/CodeViewer.module.css';
import { useState, useEffect } from 'react';

type CodeViewerProps = {
  code: string;
  codeLineList: string[];
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
  selectedBlockType?: string | null;
};

export const CodeContent = ({
  code,
  codeLineList,
  selectedBlockStartLine,
  selectedBlockLength,
  selectedBlockType,
}: CodeViewerProps) => {
  const [previousCodeLines, setPreviousCodeLines] = useState<string[]>([]);
  const [highlightedLines, setHighlightedLines] = useState<number[]>([]);

  // 코드 애니메이션 효과
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

  return (
    <div className={styles.codeContent}>
      <pre>
        <code>
          {codeLineList.map((line, index) => {
            const isWithinSelectedBlock =
              selectedBlockStartLine &&
              selectedBlockLength &&
              index + 1 >= selectedBlockStartLine &&
              index + 1 < selectedBlockStartLine + selectedBlockLength;

            // selectedBlockType에 해당하는 부분 강조
            const containsSelectedType = selectedBlockType && line.includes(selectedBlockType);

            return (
              <div
                key={index}
                className={`${highlightedLines.includes(index) ? styles.newLine : ''} ${
                  isWithinSelectedBlock ? styles.blockHighlight : ''
                } ${containsSelectedType ? styles.highlightBg : ''}`}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            );
          })}
        </code>
      </pre>
    </div>
  );
};
