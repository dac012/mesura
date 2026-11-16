import type { LucideIcon } from 'lucide-react'
import { Apple, ChartLine, NotebookPen, Settings, User } from 'lucide-react'
import { NavLink } from 'react-router'
import { texts } from '../../shared/texts'
import { paths } from '../paths'
import styles from './NavBar.module.css'

type NavItem = {
  to: string
  label: string
  Icon: LucideIcon
}

const navItems: NavItem[] = [
  { to: paths.diary, label: texts.nav.diary, Icon: NotebookPen },
  { to: paths.foods, label: texts.nav.foods, Icon: Apple },
  { to: paths.history, label: texts.nav.history, Icon: ChartLine },
  { to: paths.profile, label: texts.nav.profile, Icon: User },
  { to: paths.settings, label: texts.nav.settings, Icon: Settings },
]

// Main menu. The same markup is shown as a bottom bar on phones and as
// a sidebar on wider screens; only the CSS changes (see NavBar.module.css).
export function NavBar() {
  return (
    <nav className={styles.nav} aria-label={texts.nav.label}>
      <span className={styles.brand}>{texts.appName}</span>
      <ul className={styles.list}>
        {navItems.map(({ to, label, Icon }) => (
          <li key={to}>
            {/* NavLink knows when its URL is active and sets aria-current.
                `end` stops "/" from matching every other URL. */}
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <Icon aria-hidden="true" size={22} />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
