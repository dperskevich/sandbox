import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import styles from './lang-toggle.module.scss';
import { Button } from '../button/button';

interface LangToggleProps {
  className?: string;
}

export const LangToggle: FC<LangToggleProps> = (props) => {
  const { className } = props;
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(styles.langToggle, {}, [className])}
      onClick={toggleLanguage}
    >
      {i18n.language === 'ru' ? 'EN' : 'RU'}
    </Button>
  );
};
