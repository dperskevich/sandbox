import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import styles from './button.module.scss';

export enum ButtonVariant {
  Primary = 'primary',
  Text = 'text'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    variant = ButtonVariant.Primary,
    className, children, disabled, ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(styles.button, mods, [className, styles[variant]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
