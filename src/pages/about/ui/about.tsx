import React, { useTranslation } from 'react-i18next';

export const AboutPage = () => {
  const { t } = useTranslation('pages/about');

  return (
    <div>
      <h2>{t('About')}</h2>
    </div>
  );
};

export default AboutPage;
