// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import arTranslation from './locales/ar/translation.json'; // Add this line

// Initialize i18n
i18n
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      ar: {
        translation: arTranslation, // Add this line
      },
    },
    lng: 'fr', // Default language
    fallbackLng: 'fr', // Fallback language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
