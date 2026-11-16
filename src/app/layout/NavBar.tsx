import type { ParseKeys } from 'i18next'
import type { LucideIcon } from 'lucide-react'
import { Apple, ChartLine, NotebookPen, Settings, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import { paths } from '../paths'
import styles from './NavBar.module.css'

type NavItem = {
  to: string
  // Translation key of the link text (checked against es.json)
  labelKey: ParseKeys
  Icon: LucideIcon
}

const navItems: NavItem[] = [
  { to: paths.diary, labelKey: 'nav.diary', Icon: NotebookPen },
  { to: paths.foods, labelKey: 'nav.foods', Icon: Apple },
  { to: paths.history, labelKey: 'nav.history', Icon: ChartLine },
  { to: paths.profile, labelKey: 'nav.profile', Icon: User },
  { to: paths.settings, labelKey: 'nav.settings', Icon: Settings },
]

// Main menu. The same markup is shown as a bottom bar on phones and as
// a sidebar on wider screens; only the CSS changes (see NavBar.module.css).
export function NavBar() {
  const { t } = useTranslation()

  return (
    <nav className={styles.nav} aria-label={t('nav.label')}>
      <span className={styles.brand}>{t('appName')}</span>
      <ul className={styles.list}>
        {navItems.map(({ to, labelKey, Icon }) => (
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
              <span>{t(labelKey)}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
