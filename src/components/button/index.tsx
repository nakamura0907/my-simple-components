/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends NativeButtonProps {
  /** ボタンの幅を親要素の幅に合わせる */
  block?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** アウトラインボタン */
  outline?: boolean;
  /** ボタンのサイズ */
  size?: 'small' | 'medium' | 'large';
  /** ボタンの種類 */
  variant?: 'primary' | 'secondary' | 'danger';
}

type RefElement = HTMLButtonElement;
const Button = React.forwardRef<RefElement, ButtonProps>((props, ref) => {
  const {
    block,
    children,
    className,
    disabled,
    onClick,
    outline,
    size,
    variant,
    ...rest
  } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (disabled != null && disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const blockStyle = React.useMemo(() => {
    if (block != null && block) {
      return styles.blockStyle;
    }
    return null;
  }, [block]);

  const sizeStyle = React.useMemo(() => {
    if (size === 'small') {
      return styles.smallSizeStyle;
    }
    if (size === 'large') {
      return styles.largeSizeStyle;
    }
    return null;
  }, [size]);

  const variantStyle = React.useMemo(() => {
    if (variant === 'primary') {
      return styles.primaryStyle;
    }
    if (variant === 'secondary') {
      return styles.secondaryStyle;
    }
    if (variant === 'danger') {
      return styles.dangerStyle;
    }
    return styles.primaryStyle;
  }, [variant]);

  const outlineStyle = React.useMemo(() => {
    if (outline == null || !outline) return null;

    if (variant === 'primary') {
      return styles.outlinePrimaryStyle;
    }
    if (variant === 'secondary') {
      return styles.outlineSecondaryStyle;
    }
    if (variant === 'danger') {
      return styles.outlineDangerStyle;
    }
    return null;
  }, [outline, variant]);

  return (
    <button
      className={className}
      css={[
        styles.baseStyle,
        sizeStyle,
        variantStyle,
        outlineStyle,
        blockStyle,
      ]}
      disabled={disabled}
      onClick={handleClick}
      ref={ref}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
});
Button.displayName = 'Button';
Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
};

const styles = {
  baseStyle: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
    outline: none;
    min-width: 64px;
    min-height: 36px;
    border-radius: 4px;
    border-color: #d9d9d9;
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    &:focus {
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
    }
    &:hover {
      background-color: #e0e0e0;
    }
    &:active {
      background-color: #bdbdbd;
    }
    &:disabled {
      background-color: #e0e0e0;
      color: #9e9e9e;
      cursor: not-allowed;
    }
    & > span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `,
  primaryStyle: css`
    background-color: #2196f3;
    color: #fff;
    &:focus {
      box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.5);
    }
    &:hover {
      background-color: #1976d2;
    }
    &:active {
      background-color: #0d47a1;
    }
    &:disabled {
      background-color: #90caf9;
      color: #fff;
    }
  `,
  secondaryStyle: css`
    background-color: #bdbdbd;
    color: #fff;
    &:focus {
      box-shadow: 0 0 0 2px rgba(189, 189, 189, 0.5);
    }
    &:hover {
      background-color: #9e9e9e;
    }
    &:active {
      background-color: #757575;
    }
    &:disabled {
      background-color: #e0e0e0;
      color: #fff;
    }
  `,
  dangerStyle: css`
    background-color: #f44336;
    color: #fff;
    &:focus {
      box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.5);
    }
    &:hover {
      background-color: #d32f2f;
    }
    &:active {
      background-color: #b71c1c;
    }
    &:disabled {
      background-color: #ef9a9a;
      color: #fff;
    }
  `,
  outlinePrimaryStyle: css`
    background-color: transparent;
    color: #2196f3;
    border-color: #2196f3;
    &:focus {
      box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.5);
    }
    &:hover {
      background-color: #2196f3;
      color: #fff;
    }
    &:active {
      background-color: #1976d2;
      color: #fff;
    }
    &:disabled {
      background-color: transparent;
      color: #90caf9;
      border-color: #90caf9;
    }
  `,
  outlineSecondaryStyle: css`
    background-color: transparent;
    color: #bdbdbd;
    border-color: #bdbdbd;
    &:focus {
      box-shadow: 0 0 0 2px rgba(189, 189, 189, 0.5);
    }
    &:hover {
      background-color: #bdbdbd;
      color: #fff;
    }
    &:active {
      background-color: #9e9e9e;
      color: #fff;
    }
    &:disabled {
      background-color: transparent;
      color: #e0e0e0;
      border-color: #e0e0e0;
    }
  `,
  outlineDangerStyle: css`
    background-color: transparent;
    color: #f44336;
    border-color: #f44336;
    &:focus {
      box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.5);
    }
    &:hover {
      background-color: #f44336;
      color: #fff;
    }
    &:active {
      background-color: #d32f2f;
      color: #fff;
    }
    &:disabled {
      background-color: transparent;
      color: #ef9a9a;
      border-color: #ef9a9a;
    }
  `,
  smallSizeStyle: css`
    padding-left: 8px;
    padding-right: 8px;
    min-width: 48px;
    min-height: 32px;
    font-size: 12px;
  `,
  largeSizeStyle: css`
    padding-left: 24px;
    padding-right: 24px;
    min-width: 96px;
    min-height: 48px;
    font-size: 16px;
  `,
  blockStyle: css`
    display: block;
    width: 100%;
  `,
};

export default Button;
