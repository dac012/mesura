import { useTranslation } from 'react-i18next'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function FoodsPage() {
  const { t } = useTranslation()

  return (
    <Page title={t('pages.foods.title')}>
      <p>{t('pages.foods.placeholder')}</p>
    </Page>
  )
}
