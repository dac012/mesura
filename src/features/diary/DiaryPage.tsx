import { useTranslation } from 'react-i18next'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function DiaryPage() {
  const { t } = useTranslation()

  return (
    <Page title={t('pages.diary.title')}>
      <p>{t('pages.diary.placeholder')}</p>
    </Page>
  )
}
