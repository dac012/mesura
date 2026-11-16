import { useTranslation } from 'react-i18next'
import { Page } from '../../shared/ui/Page'

// Intentionally empty for now: the section exists so navigation can be
// built and tested before the feature itself.
export function HistoryPage() {
  const { t } = useTranslation()

  return (
    <Page title={t('pages.history.title')}>
      <p>{t('pages.history.placeholder')}</p>
    </Page>
  )
}
