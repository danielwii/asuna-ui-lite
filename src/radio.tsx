import React, { ChangeEventHandler, FocusEventHandler } from 'react';

export interface RadioItemProps {
  item: RadioItem;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler;
  checkedItem?: string;
}

export interface RadioItem {
  name: string;
  text: string;
  value: string;
}

export interface RadioProps {
  items: RadioItem[];
  onChange?: (value: string, item: RadioItem) => Promise<any> | any;
  onBlur?: FocusEventHandler;
  layout?: 'vertical' | 'horizontal';
  checkedItem?: string;
  label?: string;
}

const RadioItem: React.FC<RadioItemProps> = React.memo(
  ({ item: { name, value, text }, onChange, onBlur, checkedItem }) => (
    <div className="flex items-center mr-2">
      <input
        className="form-radio h-4 w-4 cursor-pointer transition duration-500 ease-in-out cursor-pointer"
        value={value}
        id={value}
        name={name}
        type="radio"
        onChange={onChange}
        onBlur={onBlur}
        checked={checkedItem && value === checkedItem}
      />
      <label htmlFor={value} className="ml-2 cursor-pointer">
        <span className="block text-sm leading-5 font-medium">{text}</span>
      </label>
    </div>
  ),
);

export const Radio: React.FC<RadioProps> = React.memo(({ items, onChange, onBlur, layout, label, checkedItem }) => (
  <div className="flex items-center px-5 text-product-blue">
    <label className="flex-none text-lg mr-2">{label}</label>
    <div className={`flex-1 flex ${layout === 'vertical' ? 'flex-row flex-wrap ml-2' : 'flex-col'}`}>
      {items?.map((item) => (
        <RadioItem
          item={item}
          key={item.value}
          checkedItem={checkedItem}
          onChange={() => onChange(item.value, item)}
          onBlur={onBlur}
        />
      ))}
    </div>
  </div>
));
