import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

export interface NavigatorItemProps {
  selected?: boolean;
  name?: string;
  className?: string;
}

export interface NavigatorProps<T> {
  items: T[];
  className?: string;
  renderItem: (item: T, idx: number) => React.ReactNode;
}

const Item: React.FC<React.PropsWithChildren & NavigatorItemProps> = ({
  selected,
  children,
  className = 'text-blue-500 font-bold text-shadow',
}) => <li className={selected ? `${className} cursor-pointer` : 'text-gray-300'}>{children}</li>;

function Navigator<T>({ items, className = 'space-x-6', renderItem }: NavigatorProps<T>) {
  return (
    <div className="ml-10 lg:ml-8 xl:ml-8 3xl:ml-20 flex justify-end">
      <ul className={classnames(`inline-flex items-center text-base ${className}`)}>
        {_.map(items, (item, idx) => renderItem(item, idx))}
      </ul>
    </div>
  );
}

Navigator.Item = Item;

export { Navigator };
