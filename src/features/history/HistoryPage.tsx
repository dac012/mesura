import { texts } from '../../shared/texts'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function HistoryPage() {
  return (
    <Page title={texts.pages.history.title}>
      <p>{texts.pages.history.placeholder}</p>
    </Page>
  )
}
