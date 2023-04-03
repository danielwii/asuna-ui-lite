import React, { ReactNode } from 'react';

export interface BannerBoxProps {
  height?: string;
  mask?: ReactNode;
  backgroundImage?: ReactNode;
  carousel?: ReactNode;
  logo?: ReactNode;
  langSwitch?: ReactNode;
  navigator?: ReactNode;
  isMobile?: boolean;
}

export const BannerBox: React.FC<React.PropsWithChildren & BannerBoxProps> = ({
  height,
  children,
  mask,
  backgroundImage,
  logo,
  langSwitch,
  navigator,
  isMobile,
  carousel,
}) =>
  isMobile ? (
    <div className={`w-full ${height} shadow-product relative`}>
      {mask}
      {backgroundImage}
      <div className="z-20 absolute top-5 left-4">
        <div className="flex items-center justify-center">
          {logo}
          <div className="ml-1">{langSwitch}</div>
        </div>
      </div>
      <div className="absolute left-0 top-12 w-full z-50">{navigator}</div>
      {children}
    </div>
  ) : (
    <div className="w-full lg:w-1200px h-auto shadow-product relative">
      {!carousel && mask}
      {backgroundImage ? backgroundImage : null}
      {carousel}
      <div className="z-20 absolute top-6 left-32 right-32">
        <div className="flex items-center justify-around">
          {logo}
          <div className="flex justify-around">
            {langSwitch}
            {navigator}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
