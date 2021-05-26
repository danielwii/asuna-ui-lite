/** @jsxRuntime classic */
/** @jsx jsx */
// noinspection ES6UnusedImports
import { css, jsx } from '@emotion/react';

import _ from 'lodash';
import React from 'react';

export interface FooterProps {
  htmlContent?: string;
  isMobile?: boolean;
  bgClass?: string;
  htmlCss?: string;
}

export const Footer: React.FC<FooterProps> = React.memo(
  ({
    isMobile,
    htmlContent,
    children,
    bgClass,
    htmlCss = `span {
  color: whitesmoke !important;
}`,
  }) => {
    return (
      <div className={`${isMobile ? 'w-full' : 'w-full lg:w-1200px h-93'} flex shadow-footer relative ${bgClass}`}>
        {children}
        <div className={`${isMobile ? 'p-10am ' : 'pl-32 xl:pl-27 pt-12 xl:pt-10'}`}>
          <div
            css={css`
              ${htmlCss}
            `}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    );
  },
);
