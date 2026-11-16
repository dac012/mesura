import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'

// Translations are bundled with the app (not downloaded on demand) so
// they keep working offline. To add a language, create its JSON file in
// ./locales and register it here.
export const resources = {
  es: { translation: es },
}

export const defaultLanguage = 'es'

// Keep <html lang="..."> in sync with the active language, so screen
// readers pronounce texts correctly and browsers don't offer to translate.
i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
})

void i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  // Translations are ready before the first render
  initAsync: false,
  interpolation: {
    // React already escapes values, so i18next doesn't need to
    escapeValue: false,
  },
})

export default i18n
