import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, Button } from 'shared/ui';
import SandboxIcon from 'shared/assets/icons/sandbox.svg';
import { AppRoutes } from 'shared/config/router/router-config';
import { Modal } from 'shared/ui/modal/modal';
import { LoginModal } from 'features/auth-by-username';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [signInOpened, setSignInOpened] = useState(false);

  const openAuthModal = useCallback(() => {
    setSignInOpened(true);
  }, [setSignInOpened]);

  const closeAuthModal = useCallback(() => {
    setSignInOpened(false);
  }, [setSignInOpened]);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <SandboxIcon className={styles.logo} />
      <div className={styles.title}>{t('Sandbox')}</div>
      <div className={styles.links}>
        <AppLink to={AppRoutes.MAIN}>{t('Main')}</AppLink>
        <AppLink to={AppRoutes.ABOUT}>{t('About')}</AppLink>
      </div>
      <Button onClick={openAuthModal}>{t('SignIn')}</Button>
      <LoginModal isOpen={signInOpened} onClose={closeAuthModal} />
    </div>
  );
};
