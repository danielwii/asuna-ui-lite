import React, { useState } from 'react';
import { NaviIcon, CloseIcon } from './icons';
import _ from 'lodash';

export interface SandwichMenuProps {
  items: { name: string; link: string }[];
  selected?: string;
  onClick?: (item: string) => void;
  bgColor?: string;
  textColor?: string;
}

export const SandwichMenu: React.FC<SandwichMenuProps> = ({
  items,
  selected,
  bgColor = 'rgb(29, 78, 137, 1)',
  onClick,
  textColor = 'white',
}) => {
  const [open, setOpen] = useState(false);

  const menus = (
    <ul
      className="w-full h-auto flex flex-col justify-around text-gray-100 pl-5 mt-2 z-30"
      style={{ background: bgColor }}
    >
      {_.map(items, ({ link, name }, idx) => (
        <li key={idx} className={`my-2 text-${textColor} ${selected === name && 'font-bold'}`}>
          <a href={link} onClick={() => onClick(name)}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
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
      {open && menus}
    </>
  );
};
