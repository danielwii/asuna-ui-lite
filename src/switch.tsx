import React from 'react';

export interface SwitchProps {
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
  wording?: { on?: string; off?: string };
}
export const Switch: React.FC<SwitchProps> = ({ disabled = false, checked = false, onClick, wording }) => {
  return (
    <button
      role="button"
      className={`border-box w-14 h-6 rounded-full p-0 border-0 relative inline-block align-bottom duration-1000
      ease-in-out appearance-none focus:outline-none ${checked ? 'bg-blue-500' : 'bg-gray-200'}
      ${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-around">
        <span
          className={`text-white font-medium text-sm select-none transition-opacity
        delay-100 ease-in ${!checked ? 'opacity-1' : 'opacity-0'}`}
        >
          {wording?.off ?? 'off'}
        </span>
        <span
          className={`absolute pt-1 w-5 h-5 rounded-full bg-white transition ease-in ${checked ? 'left-1' : 'left-8'}`}
        >
          {' '}
        </span>
        <span
          className={`text-white font-medium text-sm select-none transition-opacity
        delay-100 ease-out ${checked ? 'opacity-1' : 'opacity-0'}`}
        >
          {wording?.on ?? 'on'}
        </span>
      </div>
    </button>
  );
};
