import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve: any) => {
  setTimeout(() => resolve(import('./main')), 3000);
}));
