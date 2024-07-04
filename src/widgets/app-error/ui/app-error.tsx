import { FC } from 'react';
import { classNames } from '@/shared/lib/class-names';
import styles from './app-error.module.scss';
import { useTranslation } from 'react-i18next';

interface AppErrorProps {
  className?: string;
}

export const AppError: FC<AppErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('widgets/app-error');

  const refreshPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.appError, {}, [className])}>
      <h1>{t('AppErrorTitle')}</h1>
      <button onClick={refreshPage}>{t('RefreshPage')}</button>
    </div>
  )
}