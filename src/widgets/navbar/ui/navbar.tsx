import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/class-names';
import styles from './navbar.module.scss';
import { AppLink } from '@/shared/ui';
import SandboxIcon from '@/shared/assets/icons/sandbox.svg';

interface NavbarProps {
    className?: string;
}

// todo: consider moving to constants
const AboutRoutePath = '/about';

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <SandboxIcon className={styles.logo} />
      <div className={styles.title}>{t('Sandbox')}</div>
      <div className={styles.links}>
        <AppLink to="/">{t('Main')}</AppLink>
        <AppLink to={AboutRoutePath}>{t('About')}</AppLink>
      </div>
    </div>
  );
};
