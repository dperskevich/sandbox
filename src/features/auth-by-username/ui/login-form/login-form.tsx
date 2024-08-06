import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';
import { Button, Input } from 'shared/ui';
import styles from './login-form.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Input className={styles.formInput} />
      <Input className={styles.formInput} />
      <Button>{t('SignIn')}</Button>
    </div>
  );
};
