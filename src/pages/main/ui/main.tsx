import { Counter } from 'app/entities/counter/ui/counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('pages/main');

  return (
    <div>
      <h2>{t('Main')}</h2>
      <Counter />
    </div>
  );
};

export default MainPage;
