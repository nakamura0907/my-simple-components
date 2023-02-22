import React from 'react';

export type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends NativeButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

export default Button;
