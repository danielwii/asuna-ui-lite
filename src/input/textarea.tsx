import clsx from 'clsx';
import React, { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';

export type ResizeType = 'resize' | 'resize-x' | 'resize-y' | 'resize-none';
export interface TextAreaProps {
  rows?: number;
  id?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  maxLength?: number;
  showCount?: boolean;
  borderless?: boolean;
  resize?: ResizeType;
}

export const TextArea: React.FC<TextAreaProps> = React.memo(
  ({ id, rows, onChange, showCount, maxLength, borderless, resize, placeholder, value, onKeyDown }) => {
    const [count, setCount] = useState<number>(0);
    const func = {
      handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const length = e.target.value.length;
        setCount(length);
        onChange?.(e);
      },
    };
    return (
      <>
        <textarea
          id={id}
          rows={rows ?? 3}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={func.handleChange}
          onKeyDown={onKeyDown}
          className={clsx(
            `text-area`,
            borderless ? 'border-none shadow-none resize-none focus:border-none focus:ring-0' : `${resize}`,
          )}
        />
        {showCount && (
          <p className="text-right text-sm font-thin text-gray-800">
            {count}/{maxLength}
          </p>
        )}
      </>
    );
  },
);
