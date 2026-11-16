import type { ReactNode } from 'react'
import styles from './Page.module.css'

type PageProps = {
  title: string
  children?: ReactNode
}

// Common wrapper for every screen: a heading plus the screen content.
export function Page({ title, children }: PageProps) {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  )
}
