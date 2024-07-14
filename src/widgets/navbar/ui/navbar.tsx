import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, Button } from 'shared/ui';
import SandboxIcon from 'shared/assets/icons/sandbox.svg';
import { AppRoutes } from 'shared/config/router/router-config';
import { Modal } from 'shared/ui/modal/modal';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [signInOpened, setSignInOpened] = useState(false);

  const handleSignIn = useCallback(() => {
    setSignInOpened(!signInOpened);
  }, [signInOpened]);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <SandboxIcon className={styles.logo} />
      <div className={styles.title}>{t('Sandbox')}</div>
      <div className={styles.links}>
        <AppLink to={AppRoutes.MAIN}>{t('Main')}</AppLink>
        <AppLink to={AppRoutes.ABOUT}>{t('About')}</AppLink>
      </div>
      <Button onClick={handleSignIn}>{t('SignIn')}</Button>
      <Modal isOpen={signInOpened} onClose={handleSignIn}>
        <div>{t('SignIn')}</div>
      </Modal>
    </div>
  );
};
