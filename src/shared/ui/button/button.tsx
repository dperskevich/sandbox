import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib/class-names';
import styles from './button.module.scss';

export enum ButtonVariant {
    Primary = 'primary',
    Text = 'text'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    variant = ButtonVariant.Primary, className, children, ...otherProps
  } = props;

  return (
    <button type="button" className={classNames(styles.button, {}, [className, styles[variant]])} {...otherProps}>
      {children}
    </button>
  );
};
