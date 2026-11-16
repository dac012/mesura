import { Outlet } from 'react-router'
import styles from './AppLayout.module.css'
import { NavBar } from './NavBar'

// App shell shared by every screen: the navigation menu plus the page
// that matches the current URL, which React Router renders in <Outlet />.
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
