import { CheckIcon, ChevronRightIcon, PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid';

import clsx from 'clsx';
import { debounce } from 'lodash';
import React, { InputHTMLAttributes, ReactNode } from 'react';
import useMethods from 'react-use/lib/useMethods';

import { Button } from '../button';
import { Loading } from '../loading';

export type InputType = 'text' | 'password' | 'number' | 'email';

export type InputProps = {
  id?: string;
  type?: InputType;
  value?: string;
  placeholder?: string;
  label?: string;
  hint?: string;
  helperText?: string;
  error?: string;
  maxLength?: number;
  leading?: ReactNode;
  trailing?: ReactNode;
  className?: string;
  block?: boolean;
  withButton?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  label,
  hint,
  id,
  type = 'text',
  error,
  value,
  onChange,
  placeholder,
  helperText,
  leading,
  trailing,
  className,
  block,
  withButton = false,
  ...rest
}) => {
  return (
    <>
      {hint && (
        <div className={`${hint ? 'flex justify-between items-center' : ''}`}>
          {label && (
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
              {label}
            </label>
          )}
          {hint && <span className="text-sm text-gray-500">{hint}</span>}
        </div>
      )}
      <div
        className={clsx(
          `${
            withButton ? 'relative flex items-stretch flex-grow focus-within:z-10' : 'relative rounded-md inline-block'
          } ${block ? 'w-full block' : ''}`,
        )}
      >
        {leading && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {typeof leading === 'string' ? (
              <span className="text-gray-500 sm:text-sm">{leading}</span>
            ) : (
              <div className="h-5 w-5 text-gray-400">{leading}</div>
            )}
          </div>
        )}
        <input
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={onChange}
          className={`input w-full ${leading ? (typeof leading === 'string' ? 'pl-7' : 'pl-10') : ''} ${
            withButton ? 'rounded-r-none' : ''
          } ${className || ''}`}
          placeholder={placeholder}
          {...rest}
        />
        {trailing && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {typeof trailing === 'string' ? (
              <span className="text-gray-500 sm:text-sm">{trailing}</span>
            ) : (
              <div className="h-5 w-5 text-gray-400">{trailing}</div>
            )}
          </div>
        )}
        {withButton && (
          <Button
            type="primary"
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-r-md rounded-l-none"
          >
            <ChevronRightIcon className="icon-md" />
          </Button>
        )}
      </div>
      {helperText && <p className="mt-2 text-sm text-gray-500">{helperText}</p>}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </>
  );
};

const initialEditInputState = <PencilSquareIcon className="icon-sm text-gray-200" />;
const createEditInputMethods = () => ({
  reset: () => <PencilSquareIcon className="icon-sm text-gray-200" />,
  update: () => <PencilSquareIcon className="icon-sm" />,
  updating: () => <Loading />,
  success: () => <CheckIcon className="text-green-400" />,
  failure: () => <XMarkIcon className="text-red-600" />,
});

export const EditInput: React.FC<Pick<InputProps, 'placeholder' | 'onChange' | 'value' | 'className'>> = ({
  placeholder,
  onChange,
  value,
  className,
}) => {
  const [icon, methods] = useMethods(createEditInputMethods, initialEditInputState);
  return (
    <Input
      className={className}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={debounce(async (value) => {
        if (!value.trim()) return;
        try {
          methods.updating();
          await onChange(value);
          methods.success();
        } catch (e) {
          console.error(e);
          methods.failure();
        }
      }, 1000)}
      onFocus={() => methods.update()}
      onBlur={() => methods.reset()}
      trailing={icon}
    />
  );
};
