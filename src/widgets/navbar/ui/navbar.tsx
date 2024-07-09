import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink } from 'shared/ui';
import SandboxIcon from 'shared/assets/icons/sandbox.svg';
import { AppRoutes } from 'shared/config/router/router-config';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <SandboxIcon className={styles.logo} />
      <div className={styles.title}>{t('Sandbox')}</div>
      <div className={styles.links}>
        <AppLink to={AppRoutes.MAIN}>{t('Main')}</AppLink>
        <AppLink to={AppRoutes.ABOUT}>{t('About')}</AppLink>
      </div>
    </div>
  );
};
