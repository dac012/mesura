import type { ReactNode } from 'react'
import styles from './Page.module.css'

type PageProps = {
  title: string
  subtitle?: string
  children?: ReactNode
}

// Every screen goes through this wrapper so headings and spacing stay
// consistent and each page has exactly one <h1>, which screen reader users
// rely on to know where they are.
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
