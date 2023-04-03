import { CheckIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import React, { ChangeEventHandler } from 'react';

import { Button } from '../button';
import { SpinIcon } from '../font-icon';

export interface SearchBarProps {
  title?: string;
  value?: string;
  handleSearch?: () => void;
  onChange?: ChangeEventHandler;
  searchingStatus?: 'default' | 'searching' | 'success';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  title,
  handleSearch,
  onChange,
  value,
  searchingStatus = 'default',
}) => {
  let icon;
  if (searchingStatus === 'default') {
    icon = <ChevronRightIcon className="w-5 h-5" />;
  } else if (searchingStatus === 'searching') {
    icon = (
      <div className="icon-sm">
        <SpinIcon />
      </div>
    );
  } else {
    icon = <CheckIcon className="icon-sm" />;
  }

  const func = {
    handleInputConfirm: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    onSearch: () => {
      handleSearch();
    },
  };

  return (
    <>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            type="text"
            name="email"
            id="email"
            className="input rounded-none rounded-l-md w-full"
            value={value}
            onChange={onChange}
            onKeyDown={func.handleInputConfirm}
          />
        </div>
        <Button type="primary" className="rounded-none rounded-r-md" onClick={func.onSearch}>
          {icon}
        </Button>
      </div>
    </>
  );
};
