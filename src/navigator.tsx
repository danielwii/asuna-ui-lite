import React from 'react';
import _ from 'lodash';

export interface NavigatorProps {
  items: { name: string; link: string }[];
  selected?: string;
  onClick?: (item: string) => void;
}

export const Navigator: React.FC<NavigatorProps> = ({ items, selected, onClick }) => {
  return (
    <div className="mx-auto">
      <div className="relative z-10">
        <div className="relative pt-6 px-2 sm:px-4 lg:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
            <div className="space-x-8">
              {_.map(items, ({ name, link }, idx) => (
                <a
                  href={link}
                  key={idx}
                  className={`font-medium text-gray-700 hover:text-blue-500 ${
                    selected === name && 'text-blue-700 text-blue-700'
                  }`}
                  onClick={() => onClick(name)}
                >
                  {name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
