import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/class-names';
import styles from './sidebar.module.scss';
import { Button, ThemeToggle } from '@/shared/ui';
import { LangToggle } from '@/shared/ui/lang-toggle/lang-toggle';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button onClick={toggleTheme}>{t('Toggle')}</Button>
      <div className={classNames(styles.bottomToolbar, {}, [])}>
        <ThemeToggle className={styles.themeToggle} />
        <LangToggle />
      </div>
    </div>
  );
};
