import styles from '../styles/CodeViewer.module.css';
import { parseHighlightCss } from '../utils/parseHighlightCss';
import { parseHighlightHtml } from '../utils/parseHighlightHtml';
import { CodeContent } from './CodeContent';
import { LineNumbers } from './LineNumbers';

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

  return (
    <div className={`${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light}`}>
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
