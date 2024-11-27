import styles from './CodeViewer.module.css';
import { parseHighlightCss } from './parseHighlightCss';
import { parseHighlightHtml } from './parseHighlightHtml';

type CodeViewerProps = {
  code: string;
  type: 'html' | 'css';
  theme?: 'light' | 'dark';
};

export const CodeViewer = ({ code, type, theme }: CodeViewerProps) => {
  const highlightedCode =
    type === 'html' ? parseHighlightHtml(code, styles) : parseHighlightCss(code, styles);

  return (
    <div className={`${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.lineNumbers}>
        {code.split('\n').map((_, index) => (
          <div key={index} className={styles.lineNumber}>
            {index + 1}
          </div>
        ))}
      </div>
      <div className={styles.codeContent}>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};
