import clsx from 'clsx';
import { cond, constant, matches, stubTrue } from 'lodash';
import React from 'react';
import { useToggle } from 'react-use';

import { SpinRing } from './font-icon';
import { Loading } from './loading';

export type ButtonType = 'default' | 'primary' | 'dashed' | 'link' | 'outlined';

export type ButtonProps = {
  type?: ButtonType;
  block?: boolean;
  disabled?: boolean;
  shape?: 'circle' | 'round';
  asnSize?: 'small' | 'default' | 'large';
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  loading?: boolean;
  className?: string;
} & {
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: (e?: React.SyntheticEvent<any>) => void;
  // | {
  //     htmlType: Extract<React.ButtonHTMLAttributes<HTMLButtonElement>['type'], 'submit'>;
  //     onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  //   }
  // | {
  //     htmlType?: Extract<React.ButtonHTMLAttributes<HTMLButtonElement>['type'], 'reset' | 'button'>;
  //     onClick: (e?: React.SyntheticEvent<any>) => void;
  //   }
};

interface LinkProps {
  href: string;
  target?: string;
}

const Link: React.FC<React.PropsWithChildren & LinkProps> = ({ href, target = '_parent', children }) => (
  <a
    className="underline"
    href={href}
    target={target}
    // css={css`
    //   text-decoration: underline;
    //   button {
    //     text-decoration: underline;
    //   }
    // `}
  >
    {children}
  </a>
);

type LinkButtonType = { link: true; href: string } & LinkProps;
type AsunaButton = ({ primary?: true } | { dashed?: true } | { outlined?: true } | LinkButtonType) & {
  cutover?: (reset: () => void) => React.ReactNode;
};

export const AsunaButton: React.FC<
  React.PropsWithChildren & Omit<ButtonProps, keyof LinkButtonType | 'type'> & AsunaButton
> = React.memo(({ children, cutover, onClick, ...rest }) => {
  const type = cond([
    [matches({ dashed: true }), constant('dashed')],
    [matches({ outlined: true }), constant('outlined')],
    [matches({ link: true }), constant('link')],
    [matches({ primary: true }), constant('primary')],
    [stubTrue, constant('default')],
  ])(rest) as ButtonType;

  const [displayButton, toggleDisplayButton] = useToggle(true);
  const onClickWrapper = cutover ? () => toggleDisplayButton() : onClick;
  return displayButton ? (
    <Button type={type} {...rest} onClick={onClickWrapper}>
      {children}
    </Button>
  ) : (
    <>{cutover(() => toggleDisplayButton())}</>
  );
});

export const Button: React.FC<React.PropsWithChildren & ButtonProps> = React.memo(
  ({
    type = 'default',
    children,
    icon,
    href,
    target,
    disabled,
    loading,
    asnSize = 'default',
    block = '',
    shape,
    className,
    htmlType,
    ...rest
  }) => {
    const loadingIcon = () =>
      loading ? (
        <div className="icon-wrap ">
          <Loading indicator={<SpinRing color="#7B68EE" />} />
        </div>
      ) : icon ? (
        <div className="icon-wrap">{icon}</div>
      ) : null;

    const buttonType = {
      default: 'btn-default',
      primary: 'btn-primary',
      dashed: 'btn-dashed',
      link: 'btn-link',
      outlined: 'btn-outlined',
    };

    const buttonDisable = {
      default: 'btn-default-disabled',
      primary: 'btn-primary-disabled',
      dashed: 'btn-dashed-disabled',
      link: 'btn-link-disabled',
      outlined: 'btn-outlined-disabled',
    };

    const view = (
      <button
        className={clsx(
          `btn rounded border px-2 py-1 ${buttonType[type]} ${asnSize} ${shape === 'circle' ? 'circle' : ''} ${
            disabled || loading ? `${buttonDisable[type]} disabled` : ''
          } ${block ? 'block' : ''} ${className || ''}`,
        )}
        {...rest}
        disabled={disabled}
      >
        {loadingIcon()}
        {children}
      </button>
    );

    return href ? (
      <Link target={target} href={href}>
        {view}
      </Link>
    ) : (
      view
    );
  },
);
