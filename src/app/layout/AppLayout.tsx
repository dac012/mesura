import { Outlet } from 'react-router'
import styles from './AppLayout.module.css'
import { NavBar } from './NavBar'

// Pages render inside this shell (through <Outlet />) instead of each page
// including the menu itself, so the menu isn't rebuilt on every navigation.
export function AppLayout() {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  )
}
