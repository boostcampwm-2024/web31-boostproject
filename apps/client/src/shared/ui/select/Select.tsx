import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useWindowSize } from '@/shared/hooks';
import ArrowDown from '@/shared/assets/arrow_down.svg?react';
import ArrowUp from '@/shared/assets/arrow_up.svg?react';

export enum SelectSize {
  // eslint-disable-next-line no-unused-vars
  SMALL = 'SMALL',
  // eslint-disable-next-line no-unused-vars
  MEDIUM = 'MEDIUM',
}

export type TOption = {
  value: string;
  label: string;
};

interface SelectProps {
  id?: string;
  options: TOption[] | string[];
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  placeholder?: string;
  size?: SelectSize;
  disabled?: boolean;
}

export const Select = ({
  id,
  options,
  value,
  onChange,
  placeholder = '',
  size = SelectSize.MEDIUM,
  disabled = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(value);
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { screenHeight } = useWindowSize();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isContainerClicked = containerRef.current?.contains(event.target as Node);
      const isDropdownClicked = dropdownRef.current?.contains(event.target as Node);

      if (!isContainerClicked && !isDropdownClicked) {
        setIsOpen(false);
      }
    };

    const handleScroll = (event: Event) => {
      if (isOpen) {
        const isDropdownScroll = dropdownRef.current?.contains(event.target as Node);
        if (!isDropdownScroll) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      setIsCalculated(false); // 드롭다운이 열릴 때마다 초기화

      const resizeObserver = new ResizeObserver((entries) => {
        const height = entries[0].contentRect.height;
        if (height > 0) {
          setDropdownHeight(height);

          if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const bottomSpace = screenHeight - containerRect.bottom;
            const topSpace = containerRect.top;

            setDropdownPosition(bottomSpace < height && topSpace > height ? 'top' : 'bottom');
            setIsCalculated(true); // 계산이 완료되면 표시
          }
        }
      });

      resizeObserver.observe(dropdownRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [isOpen, screenHeight]);

  const handleOpen = () => {
    if (disabled) return;

    if (isOpen) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    setDropdownPosition('bottom');
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const renderOptions = (opts: TOption[] | string[]) => {
    if (opts.length === 0) return <></>;
    if (typeof opts[0] === 'string') {
      const stringOpts = opts as string[];
      return stringOpts.map((opt) => (
        <li
          key={opt}
          onClick={() => handleSelect(opt)}
          className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-yellow-200 ${
            opt === selectedOption ? 'bg-yellow-500 text-gray-500' : 'text-gray-300'
          }`}
        >
          {opt}
        </li>
      ));
    }

    const objectOpts = opts as TOption[];
    return objectOpts.map((option) => (
      <li
        key={option.value}
        onClick={() => handleSelect(option.value)}
        className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-yellow-200 ${
          option.value === selectedOption ? 'bg-yellow-500 text-gray-500' : 'text-gray-300'
        }`}
      >
        {option.label}
      </li>
    ));
  };

  const getSelectedLabel = (selectedValue: string, opts: TOption[] | string[]): string => {
    if (opts.length === 0) return placeholder;

    if (typeof opts[0] === 'string') {
      const stringOpts = opts as string[];
      return stringOpts.find((opt) => opt === selectedValue) || stringOpts[0];
    }

    const objectOpts = opts as TOption[];
    return objectOpts.find((opt) => opt.value === selectedValue)?.label || placeholder;
  };

  const selectedLabel = getSelectedLabel(selectedOption, options);

  return (
    <div
      className={`${size === SelectSize.MEDIUM ? 'w-52' : 'w-36'} relative text-ellipsis whitespace-nowrap`}
      ref={containerRef}
      id={id || undefined}
    >
      <button
        type="button"
        onClick={handleOpen}
        disabled={disabled}
        className="text-medium-md w-full rounded-lg border border-gray-100 bg-white px-4 py-1.5 text-left focus:outline-none disabled:border disabled:border-gray-100 disabled:bg-gray-50"
      >
        <div className="flex items-center justify-between gap-2">
          <span className={`${!selectedOption ? 'text-gray-200' : 'text-gray-500'}`}>
            {selectedLabel}
          </span>
          {isOpen ? <ArrowDown width={12} /> : <ArrowUp width={12} />}
        </div>
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className={`fixed z-[9999] min-w-24 rounded-lg border border-gray-100 bg-white shadow-lg transition-opacity duration-200`}
            style={{
              left: containerRef.current
                ? `${containerRef.current.getBoundingClientRect().left}px`
                : '0',
              top:
                dropdownPosition === 'bottom'
                  ? `${(containerRef.current?.getBoundingClientRect().bottom || 0) + 4}px`
                  : `${(containerRef.current?.getBoundingClientRect().top || 0) - dropdownHeight - 4}px`,
              opacity: isCalculated ? 1 : 0,
              visibility: isCalculated ? 'visible' : 'hidden',
            }}
          >
            <ul className="flex max-h-48 flex-col gap-1 overflow-y-auto px-2 py-2">
              {renderOptions(options)}
            </ul>
          </div>,
          document.getElementById('dropdownDiv')!
        )}
    </div>
  );
};
