import React, { useEffect, useState } from 'react';

import { AngleUp } from './icons';

export const BackTop: React.FC<{ color?: string }> = ({ color = 'blue' }) => {
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
      className={`w-16 h-16 fixed text-center text-white text-xl right-3 bottom-3 bg-${color}-800 focus:outline-none rounded-full 
      cursor-pointer transition-all delay-200 ease-in-out ${isVisible ? 'opacity-1000' : 'opacity-0'}`}
      onClick={() => {
        scrollTop();
      }}
    >
      <AngleUp color="#fff" />
    </button>
  );
};
