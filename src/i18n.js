import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import zhCN from './locales/zh-CN.json';
import de from './locales/de.json';
import esMX from './locales/es-MX.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';
import ptBR from './locales/pt-BR.json';
import fr from './locales/fr.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ar: { translation: ar },
            "zh-CN": { translation: zhCN },
            de: { translation: de },
            "es-MX": { translation: esMX },
            ko: { translation: ko },
            ja: { translation: ja },
            "pt-BR": { translation: ptBR },
            fr: { translation: fr },
        },
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            lookupQuerystring: 'lang',
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
