import React, {
  FC, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, Button } from 'shared/ui';
import SandboxIcon from 'shared/assets/icons/sandbox.svg';
import { AppRoutes } from 'shared/config/router/router-config';
import { LoginModal } from 'features/auth-by-username';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const [signInOpened, setSignInOpened] = useState(false);

  const openAuthModal = useCallback(() => {
    setSignInOpened(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setSignInOpened(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  // todo: better to use composition and make 2 separate navbars
  // for authorized and unauthorized users
  const authorizedNavbar = useCallback(() => (
    <>
      <span>{authData.username}</span>
      <Button onClick={handleLogout}>{t('Logout')}</Button>
    </>
  ), [authData, handleLogout, t]);

  const unauthorizedNavbar = useCallback(() => (
    <>
      <Button onClick={openAuthModal}>{t('SignIn')}</Button>
      <LoginModal isOpen={signInOpened} onClose={closeAuthModal} />
    </>
  ), [closeAuthModal, openAuthModal, signInOpened, t]);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <SandboxIcon className={styles.logo} />
      <div className={styles.title}>{t('Sandbox')}</div>
      <div className={styles.links}>
        <AppLink to={AppRoutes.MAIN}>{t('Main')}</AppLink>
        <AppLink to={AppRoutes.ABOUT}>{t('About')}</AppLink>
      </div>
      {authData ? authorizedNavbar() : unauthorizedNavbar()}
    </div>
  );
};
