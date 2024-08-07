import React, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme-provider';
import { StoreProvider } from 'app/providers/store-provider';
import App from './app/app';
import '@/shared/config/i18n/i18n';
import ErrorBoundary from './app/providers/error-boundary/ui/error-boundary';
// it's not a module.scss, because we want to import the whole file
import './app/styles/app.scss';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
