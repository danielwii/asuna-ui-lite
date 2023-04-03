import React from 'react';

export type BorderWidth = 2 | 4 | 8;
export interface DividerProps {
  title?: string;
  color?: string;
  borderWidth?: BorderWidth;
}

export const Divider: React.FC<DividerProps> = ({ title, color = 'gray', borderWidth = '2' }) => {
  const border = `border-t-${borderWidth}`;
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className={`w-full ${border}`} style={{ borderColor: `${color}` }} />
      </div>
      <div className="relative flex justify-center">
        {title && (
          <span className="px-3 bg-white text-lg font-medium" style={{ color: `${color}` }}>
            {title}
          </span>
        )}
      </div>
    </div>
  );
};
