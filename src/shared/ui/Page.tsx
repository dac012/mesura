import type { ReactNode } from 'react'
import styles from './Page.module.css'

type PageProps = {
  title: string
  // Optional secondary line shown under the title
  subtitle?: string
  children?: ReactNode
}

// Common wrapper for every screen: a heading plus the screen content.
export function Page({ title, subtitle, children }: PageProps) {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>
      {children}
    </section>
  )
}
