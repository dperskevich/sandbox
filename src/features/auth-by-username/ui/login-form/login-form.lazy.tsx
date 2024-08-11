import { FC, lazy } from 'react';
import { LoginFormProps } from './login-form';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve: any) => {
    setTimeout(() => resolve(import('./login-form')), 1000);
  }),
);
