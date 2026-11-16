import { useTranslation } from 'react-i18next'
import { Page } from '../../shared/ui/Page'

// Intentionally empty for now: the section exists so navigation can be
// built and tested before the feature itself.
export function SettingsPage() {
  const { t } = useTranslation()

  return (
    <Page title={t('pages.settings.title')}>
      <p>{t('pages.settings.placeholder')}</p>
    </Page>
  )
}
