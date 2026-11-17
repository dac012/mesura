import type { RouteObject } from 'react-router'
import { createBrowserRouter, Navigate } from 'react-router'
import { DiaryPage } from '../features/diary/DiaryPage'
import { FoodsPage } from '../features/foods/FoodsPage'
import { HistoryPage } from '../features/history/HistoryPage'
import { ProfilePage } from '../features/profile/ProfilePage'
import { SettingsPage } from '../features/settings/SettingsPage'
import { AppLayout } from './layout/AppLayout'
import { paths } from './paths'

// A single route table rather than <Routes> spread across components, so
// every URL in the app can be seen in one place. Exported on its own so
// tests can run these exact routes in an in-memory router.
export const routes: RouteObject[] = [
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: DiaryPage },
      { path: paths.foods, Component: FoodsPage },
      { path: paths.history, Component: HistoryPage },
      { path: paths.profile, Component: ProfilePage },
      { path: paths.settings, Component: SettingsPage },
      // Redirect instead of a "not found" page: an unknown URL is most
      // likely an outdated bookmark, and the diary is the useful place to land
      { path: '*', element: <Navigate to={paths.diary} replace /> },
    ],
  },
]

// Browser URLs (/foods) instead of hash URLs (/#/foods) look cleaner, but
// the static host (GitHub Pages) must then serve index.html for any path,
// or reloading on /foods returns a 404.
// basename comes from Vite's base setting, so routes match both in development
// ("/") and on GitHub Pages ("/mesura/") without listing the prefix twice.
export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
})
