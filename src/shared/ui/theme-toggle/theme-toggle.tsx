import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { useTheme } from 'app/providers/theme-provider';
import styles from './theme-toggle.module.scss';
import { Button } from '../button/button';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { className } = props;
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      className={classNames(styles.themeToggle, {}, [className])}
      onClick={toggleTheme}
    >
      {t('Theme')}
    </Button>
  );
};
