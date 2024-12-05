import { CodeContent } from '../CodeContent/CodeContent';
import { LineNumbers } from '../LineNumbers/LineNumbers';
import { parseHighlightCss } from '../../utils/parseHighlightCss';
import { parseHighlightHtml } from '../../utils/parseHighlightHtml';
import styles from '../../styles/CodeViewer.module.css';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

type CodeViewerProps = {
  code: string;
  type: 'html' | 'css';
  theme?: 'light' | 'dark';
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
  selectedBlockType?: string | null;
};

/**
 *
 * @description
 * 변환된 HTML, CSS 코드를 줄 수와 함께 보여주는 컴포넌트
 */
export const CodeViewer = ({
  code,
  type,
  theme,
  selectedBlockStartLine,
  selectedBlockLength,
  selectedBlockType,
}: CodeViewerProps) => {
  const parsedCode =
    type === 'html'
      ? parseHighlightHtml(code, styles, selectedBlockType!)
      : parseHighlightCss(code, styles, selectedBlockType!);
  const codeLineList = parsedCode.split('\n').filter((line) => line.trim() !== '');
  const { currentStep } = useCoachMarkStore();

  return (
    <div
      className={`${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light} ${currentStep === 3 ? 'z-[200] bg-white' : ''}`}
    >
      <div className={styles.scrollContainer}>
        <LineNumbers codeLineList={codeLineList} />

        <CodeContent
          code={code}
          codeLineList={codeLineList}
          selectedBlockLength={selectedBlockLength}
          selectedBlockStartLine={selectedBlockStartLine}
          selectedBlockType={selectedBlockType}
        />
      </div>
    </div>
  );
};
