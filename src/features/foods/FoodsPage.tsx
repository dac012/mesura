import { useTranslation } from 'react-i18next'
import { Page } from '../../shared/ui/Page'

// Intentionally empty for now: the section exists so navigation can be
// built and tested before the feature itself.
export function FoodsPage() {
  const { t } = useTranslation()

  return (
    <Page title={t('pages.foods.title')}>
      <p>{t('pages.foods.placeholder')}</p>
    </Page>
  )
}
