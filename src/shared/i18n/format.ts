import i18n from './i18n'

// Locale-aware formatting built on the browser's Intl API. Each helper
// uses the active app language by default, so 1234.5 shows as "1234,5" in
// Spanish and "1,234.5" in English without any extra code in components.

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
