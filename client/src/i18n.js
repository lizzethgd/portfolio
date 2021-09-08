import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import global_en from './assets/translations/en/global.json'
import global_fi from './assets/translations/fi/global.json'
import global_de from './assets/translations/de/global.json'
import global_es from './assets/translations/es/global.json'



i18n
  //.use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    detection: {
      order: ['cookie',  'localStorage', 'htmlTag', 'next navigator', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources:{
      en: {global: global_en},
      fi: {global: global_fi},
      de: {global: global_de},
      es: {global: global_es},
    }
   
  });

export default i18n;