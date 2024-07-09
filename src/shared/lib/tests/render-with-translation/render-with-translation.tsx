import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18n.for.tests';

export const renderWithTranslation = (reactNode: ReactNode) => (
  <I18nextProvider i18n={i18nForTests}>
    {reactNode}
  </I18nextProvider>
);
