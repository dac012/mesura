import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { formatDate } from '../../shared/i18n/format'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in phase E.
export function DiaryPage() {
  const { t } = useTranslation()
  // Read the current date once, when the screen opens. Calling new Date()
  // on every render would make the output unpredictable. In phase E this
  // becomes the day the user is viewing.
  const [day] = useState(() => new Date())

  return (
    <Page
      title={t('pages.diary.title')}
      // e.g. "lunes, 16 de noviembre" in Spanish
      subtitle={formatDate(day, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      })}
    >
      <p>{t('pages.diary.placeholder')}</p>
    </Page>
  )
}
