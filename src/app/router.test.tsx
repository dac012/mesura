import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, expect, it } from 'vitest'
import i18n from '../shared/i18n/i18n'
import { routes } from './router'

// Memory router: the real route table, but the URL lives in memory, so each
// test starts wherever it needs without touching the jsdom location.
function renderApp(initialUrl = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [initialUrl] })
  render(<RouterProvider router={router} />)
  return router
}

// Texts come from the translation files rather than being typed here, so
// rewording a label doesn't break tests that are about behavior.
const t = i18n.t

function getMainNav() {
  return screen.getByRole('navigation', { name: t('nav.label') })
}

describe('app navigation', () => {
  it('shows a link for each main section', () => {
    renderApp()

    const links = within(getMainNav()).getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual([
      t('nav.diary'),
      t('nav.foods'),
      t('nav.history'),
      t('nav.profile'),
      t('nav.settings'),
    ])
  })

  it('opens a section and marks only its link as current', async () => {
    const user = userEvent.setup()
    renderApp()
    const nav = within(getMainNav())

    await user.click(nav.getByRole('link', { name: t('nav.foods') }))

    expect(
      screen.getByRole('heading', { level: 1, name: t('pages.foods.title') }),
    ).toBeInTheDocument()
    expect(nav.getByRole('link', { name: t('nav.foods') })).toHaveAttribute(
      'aria-current',
      'page',
    )
    // "/" is a prefix of every URL, yet the diary link must not stay active
    expect(nav.getByRole('link', { name: t('nav.diary') })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('redirects unknown URLs to the diary', () => {
    const router = renderApp('/this-page-does-not-exist')

    expect(router.state.location.pathname).toBe('/')
    expect(
      screen.getByRole('heading', { level: 1, name: t('pages.diary.title') }),
    ).toBeInTheDocument()
  })
})
