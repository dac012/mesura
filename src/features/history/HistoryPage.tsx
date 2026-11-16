import { useTranslation } from 'react-i18next'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function HistoryPage() {
  const { t } = useTranslation()

  return (
    <Page title={t('pages.history.title')}>
      <p>{t('pages.history.placeholder')}</p>
    </Page>
  )
}
