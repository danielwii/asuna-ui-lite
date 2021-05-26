import React, { useState } from 'react';
import { NaviIcon, CloseIcon } from './icons';
import _ from 'lodash';

export interface SandwichItemProps {
  selected?: boolean;
  name?: string;
  className?: string;
}

export interface SandwichMenuProps<T> {
  items: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const Item: React.FC<SandwichItemProps> = ({ selected, children, className }) => (
  <li className={selected ? `${className} cursor-pointer` : 'text-gray-300'}>{children}</li>
);

function SandwichMenu<T>({ items, renderItem, bgColor = 'rgb(29, 78, 137, 1)' }: SandwichMenuProps<T>) {
  const [open, setOpen] = useState(false);

  window.onclick = () => setOpen(false);

  return (
    <>
      <div
        className="pl-2"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        {open ? <CloseIcon /> : <NaviIcon />}
      </div>
      {open && (
        <ul
          className="w-full h-auto flex flex-col justify-around text-gray-100 pl-5 mt-2 z-30"
          style={{ background: bgColor }}
        >
          {_.map(items, (item, idx) => renderItem(item, idx))}
        </ul>
      )}
    </>
  );
}

SandwichMenu.Item = Item;

export { SandwichMenu };
