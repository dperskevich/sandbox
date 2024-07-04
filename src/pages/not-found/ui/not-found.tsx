import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/class-names';
import styles from './notFound.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound: FC<NotFoundProps> = (props) => {
  const { t } = useTranslation('pages/not-found');
  const { className } = props;

  return (
    <div className={classNames(styles.notFound, {}, [className])}>
      {t('PageNotFound')}
    </div>
  );
};
