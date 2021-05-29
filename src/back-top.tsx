import React, { useEffect, useState } from 'react';

import { AngleUp } from './icons';

export interface BackTopProps {
  position?: string;
  color?: string;
}

export const BackTop: React.FC<BackTopProps> = ({ color = '#4B0082', position = 'right-3 bottom-3' }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = () => {
      setTimeout(() => {
        setIsVisible(window.pageYOffset > 200);
      }, 200);
    };
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="top"
      aria-label="scrollTop"
      type="button"
      className={`w-16 h-16 fixed text-center text-white text-xl ${position} focus:outline-none rounded-full 
      cursor-pointer transition-all delay-200 ease-in-out ${isVisible ? 'opacity-1000' : 'opacity-0'}`}
      style={{ backgroundColor: color }}
      onClick={() => {
        scrollTop();
      }}
    >
      <AngleUp color="#fff" />
    </button>
  );
};
