import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/class-names';
import { Button, Input } from 'shared/ui';
import { loginByUsername } from 'features/auth-by-username/model/services/login-by-username/login-by-username';
import { getLoginState } from 'features/auth-by-username/model/selectors/get-login-state/get-login-state';
import { loginActions } from '../../model/slice/login-slice';
import styles from './login-form.module.scss';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  useEffect(() => () => {
    dispatch(loginActions.setUsername(''));
    dispatch(loginActions.setPassword(''));
  }, [dispatch]);

  const handleUsernameChange = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handlePasswordChange = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleSignIn = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      {error && (
        <div>
          {t('InvalidLogin')}
          <br />
          <br />
        </div>
      )}
      <Input className={styles.formInput} value={username} onChange={handleUsernameChange} />
      <Input className={styles.formInput} value={password} onChange={handlePasswordChange} />
      <Button onClick={handleSignIn} disabled={isLoading}>{t('SignIn')}</Button>
    </div>
  );
});

export default LoginForm;
