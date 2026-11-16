import i18n from './i18n'

// Components call these helpers instead of toLocaleString() so numbers and
// dates follow the app language (the one used for the texts), not whatever
// language the browser happens to be in.
// `locale` is a parameter, defaulting to the app language, so tests can check
// any language without changing global state.

export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions,
  locale: string = i18n.language,
): string {
  return new Intl.NumberFormat(locale, options).format(value)
}

export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' },
  locale: string = i18n.language,
): string {
  return new Intl.DateTimeFormat(locale, options).format(date)
}
