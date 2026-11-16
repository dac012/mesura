import { useTranslation } from 'react-i18next'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function ProfilePage() {
  const { t } = useTranslation()

  return (
    <Page title={t('pages.profile.title')}>
      <p>{t('pages.profile.placeholder')}</p>
    </Page>
  )
}
