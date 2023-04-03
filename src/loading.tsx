import { isFunction } from 'lodash';
import React from 'react';

import { SpinRing } from './font-icon';

export interface LoadingProps {
  indicator?: React.ReactNode;
  tip?: string;
  spinning?: boolean;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  indicator = <SpinRing color="blue" />,
  tip,
  spinning = true,
  className,
}: LoadingProps) =>
  spinning && (
    <div className="flex flex-col items-center">
      <div className={`text-indigo-600 inline-flex animate-spin-slow ${className || ''}`}>{indicator}</div>
      <div className="text-indigo-800">{tip}</div>
    </div>
  );

export const WithLoading: React.FC<React.PropsWithChildren & { loading: boolean }> = ({ loading, children }) => {
  if (loading) return <Loading />;
  /*
  if (error)
    return (
      <ErrorInfo>
        {retry && <Button onClick={() => retry()}>Reload</Button>}
        <pre>{util.inspect(error)}</pre>
      </ErrorInfo>
    );
*/

  if (isFunction(children)) {
    const Component = children as React.FC;
    return <Component />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
