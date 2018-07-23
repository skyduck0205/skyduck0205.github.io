import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    whitelist: ['zh', 'zh-TW', 'en', 'en-US'],
    nonExplicitWhitelist: true,
    fallbackLng: 'zh-TW',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    }
  });

export default i18n;
