import { describe, expect, it } from 'vitest'
import { formatDate, formatNumber } from './format'

// A fixed date, built from local parts, so results don't depend on the day
// or the time zone where the tests run
const date = new Date(2026, 10, 16) // months start at 0: 10 is November

describe('formatNumber', () => {
  it('uses Spanish separators', () => {
    expect(formatNumber(1234.5, undefined, 'es')).toBe('1234,5')
    expect(formatNumber(12345.5, undefined, 'es')).toBe('12.345,5')
  })

  it('uses English separators', () => {
    expect(formatNumber(1234.5, undefined, 'en')).toBe('1,234.5')
  })

  it('passes options through to Intl', () => {
    expect(formatNumber(1234.567, { maximumFractionDigits: 1 }, 'es')).toBe(
      '1234,6',
    )
  })

  it('defaults to the app language (Spanish)', () => {
    expect(formatNumber(12345.5)).toBe('12.345,5')
  })
})

describe('formatDate', () => {
  it('formats a medium date in Spanish and English', () => {
    expect(formatDate(date, undefined, 'es')).toBe('16 nov 2026')
    expect(formatDate(date, undefined, 'en')).toBe('Nov 16, 2026')
  })

  it('passes options through to Intl', () => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' } as const
    expect(formatDate(date, options, 'es')).toBe('lunes, 16 de noviembre')
    expect(formatDate(date, options, 'en')).toBe('Monday, November 16')
  })

  it('defaults to the app language (Spanish)', () => {
    expect(formatDate(date)).toBe('16 nov 2026')
  })
})
