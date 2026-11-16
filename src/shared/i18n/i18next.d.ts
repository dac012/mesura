import 'i18next'
import type es from './locales/es.json'

// Tell TypeScript which translation keys exist (taken from es.json), so a
// misspelled key like t('nav.diaryy') fails the build instead of showing
// a broken text in the app.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: typeof es
    }
  }
}
