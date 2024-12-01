import { useEffect, useRef, useState } from 'react';

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

/**
 *
 * @description
 * 커스텀 select 컴포넌트
 */
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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      className={`${size === SelectSize.MEDIUM ? 'w-52' : 'w-36'} truncate`}
      ref={dropdownRef}
      id={id && ''}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className="text-medium-md w-full rounded-lg border border-gray-100 bg-white px-4 py-1.5 text-left focus:outline-none disabled:border disabled:border-gray-100 disabled:bg-gray-50"
      >
        <div className="flex items-center justify-between gap-2">
          <span className={` ${!selectedOption ? 'text-gray-200' : 'text-gray-500'}`}>
            {selectedLabel}
          </span>
          {isOpen ? <ArrowDown width={12} /> : <ArrowUp width={12} />}
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 min-w-24 rounded-lg border border-gray-100 bg-white shadow-lg">
          <ul className="flex flex-col gap-1 px-2 py-2">{renderOptions(options)}</ul>
        </div>
      )}
    </div>
  );
};
