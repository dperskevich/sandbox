import { lazy } from 'react';

export const AboutPageLazy = lazy(() => new Promise((resolve: any) => {
    setTimeout(() => resolve(import('./about')), 3000);
}));