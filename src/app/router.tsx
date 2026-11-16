import { createBrowserRouter, Navigate } from 'react-router'
import { DiaryPage } from '../features/diary/DiaryPage'
import { FoodsPage } from '../features/foods/FoodsPage'
import { HistoryPage } from '../features/history/HistoryPage'
import { ProfilePage } from '../features/profile/ProfilePage'
import { SettingsPage } from '../features/settings/SettingsPage'
import { AppLayout } from './layout/AppLayout'
import { paths } from './paths'

// Every page is a child of AppLayout, so they all share the same shell.
export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: DiaryPage },
      { path: paths.foods, Component: FoodsPage },
      { path: paths.history, Component: HistoryPage },
      { path: paths.profile, Component: ProfilePage },
      { path: paths.settings, Component: SettingsPage },
      // Any unknown URL sends the user back to the diary
      { path: '*', element: <Navigate to={paths.diary} replace /> },
    ],
  },
])
