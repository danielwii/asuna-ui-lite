import _ from 'lodash';
import React, { ReactElement, ReactNode, ValidationMap, WeakValidationMap } from 'react';

export interface CustomFC<P = {}, R = () => React.ReactNode> {
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
  (props: P & { children?: R }, context?: any): ReactElement | null;
}
export type StateChildren<S> = (state: S, setState: (state: S) => void) => ReactNode;
export type StateFunctionComponent<P = {}, S = {}> = CustomFC<P, StateChildren<S>>;
export type StateFC<State> = StateFunctionComponent<{ initialState?: State }, State>;

export const StoreProvider: StateFC<any> = ({ initialState, children }) => {
  const [state, setState] = React.useState(initialState);
  return <div>{children(state, setState)}</div>;
};
