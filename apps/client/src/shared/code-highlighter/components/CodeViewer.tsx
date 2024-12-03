import { CodeContent } from './CodeContent';
import { LineNumbers } from './LineNumbers';
import { parseHighlightCss } from '../utils/parseHighlightCss';
import { parseHighlightHtml } from '../utils/parseHighlightHtml';
import styles from '../styles/CodeViewer.module.css';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

type CodeViewerProps = {
  code: string;
  type: 'html' | 'css';
  theme?: 'light' | 'dark';
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
  selectedBlockType?: string | null;
};

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
      className={`${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light} ${currentStep === 3 ? 'z-[99999] bg-white' : ''}`}
    >
      <LineNumbers codeLineList={codeLineList} />

      <CodeContent
        code={code}
        codeLineList={codeLineList}
        selectedBlockLength={selectedBlockLength}
        selectedBlockStartLine={selectedBlockStartLine}
        selectedBlockType={selectedBlockType}
      />
    </div>
  );
};
