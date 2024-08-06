import React, { FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import styles from './input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    value, onChange, className, type = 'text', ...otherProps
  } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(styles.input, {}, [className])}>
      <input
        type={type}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
