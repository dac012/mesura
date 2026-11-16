import type { ParseKeys } from 'i18next'
import type { LucideIcon } from 'lucide-react'
import { Apple, ChartLine, NotebookPen, Settings, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import { paths } from '../paths'
import styles from './NavBar.module.css'

type NavItem = {
  to: string
  // The key, not the translated text: texts must be resolved while
  // rendering, or they would not update when the language changes
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

// One menu restyled by CSS for each screen size, instead of two separate
// components, so there is only one list of links to keep up to date.
export function NavBar() {
  const { t } = useTranslation()

  return (
    <nav className={styles.nav} aria-label={t('nav.label')}>
      <span className={styles.brand}>{t('appName')}</span>
      <ul className={styles.list}>
        {navItems.map(({ to, labelKey, Icon }) => (
          <li key={to}>
            {/* NavLink rather than Link: it marks the active section, also for
                screen readers (aria-current). `end` is needed because "/" is
                a prefix of every URL, so the diary would always look active. */}
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
