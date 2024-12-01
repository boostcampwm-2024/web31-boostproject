import { useState } from 'react';
import styles from '../styles/CodeViewer.module.css';

type LineNumbersProps = {
  codeLineList: string[];
};

export const LineNumbers = ({ codeLineList }: LineNumbersProps) => {
  const [hoveredLineNumber, setHoveredLineNumber] = useState<number | null>(null);

  // 마우스 enter, leave 색상 변화
  const handleMouseEnter = (lineNumber: number) => {
    setHoveredLineNumber(lineNumber);
  };

  const handleMouseLeave = () => {
    setHoveredLineNumber(null);
  };

  return (
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
  );
};
