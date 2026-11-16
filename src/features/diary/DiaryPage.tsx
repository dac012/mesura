import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { formatDate } from '../../shared/i18n/format'
import { Page } from '../../shared/ui/Page'

export function DiaryPage() {
  const { t } = useTranslation()
  // Read once with useState instead of calling new Date() while rendering:
  // React expects rendering to give the same result every time.
  // Trade-off: if the app stays open past midnight the date won't change
  // until the screen is reopened.
  const [day] = useState(() => new Date())

  return (
    <Page
      title={t('pages.diary.title')}
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
