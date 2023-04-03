import React, { CSSProperties } from 'react';

export interface BasicLayoutProps {
  className?: string; // tailwind css style
  style?: CSSProperties;
  content?: React.ReactNode;
}

const Header: React.FC<React.PropsWithChildren & BasicLayoutProps> = ({ className, style, children }) => (
  <div className={`${className} w-full`} style={style}>
    {children}
  </div>
);

const Layout = ({ children }): JSX.Element => <div className="flex flex-col h-screen w-full">{children}</div>;

Layout.Header = Header;

export { Layout };
