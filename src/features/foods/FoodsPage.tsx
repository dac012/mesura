import { texts } from '../../shared/texts'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function FoodsPage() {
  return (
    <Page title={texts.pages.foods.title}>
      <p>{texts.pages.foods.placeholder}</p>
    </Page>
  )
}
