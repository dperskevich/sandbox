import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, ThemeToggle } from 'shared/ui';
import { LangToggle } from 'shared/ui/lang-toggle/lang-toggle';
import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="Sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <Button
        onClick={toggleCollapsed}
        className={styles.collapseButton}
        data-testid="sidebar-toggle"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classNames(styles.bottomToolbar, {}, [])}>
        <ThemeToggle className={styles.themeToggle} />
        <LangToggle />
      </div>
    </div>
  );
};
