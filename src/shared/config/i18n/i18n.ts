import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// allows to load translations from a file or api without using a backend
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18n.use - registers the plugin.
// We can use multiple plugins at the same time and even create our own.

i18n
  .use(Backend) // load translations using http
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng: 'en',
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false, // we don't want to use Suspense - localization chunk is too small
    },
  });

export default i18n;
