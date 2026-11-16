import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
// Adds DOM matchers such as toBeInTheDocument() and toHaveAttribute()
import '@testing-library/jest-dom/vitest'
// Components need translations loaded, exactly as main.tsx does in the app
import '../shared/i18n/i18n'

// Testing Library only cleans up on its own when Vitest globals are on;
// they are off (tests import describe/it/expect explicitly), so without this
// each test would find the previous test's screen still in the page.
afterEach(() => {
  cleanup()
})
