import { useTranslation } from 'react-i18next'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function SettingsPage() {
  const { t } = useTranslation()

  return (
    <Page title={t('pages.settings.title')}>
      <p>{t('pages.settings.placeholder')}</p>
    </Page>
  )
}
