import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from '@/shared/config/router/router-config';

export const AppRouter = () => {
  const { t } = useTranslation();

  return (
  // <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(RouterConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<div>{t('Loading')}</div>}>
              <div className="app-page">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  // </Suspense>
  );
};
