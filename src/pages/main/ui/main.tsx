import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('pages/main');

  return (
    <div>
      <h2>{t('Main')}</h2>
    </div>
  );
};

export default MainPage;
