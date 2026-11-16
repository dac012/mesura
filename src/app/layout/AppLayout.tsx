import { Outlet } from 'react-router'

// App shell shared by every screen. <Outlet /> is where React Router
// renders the page that matches the current URL.
export function AppLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}
