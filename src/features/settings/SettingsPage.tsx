import { texts } from '../../shared/texts'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function SettingsPage() {
  return (
    <Page title={texts.pages.settings.title}>
      <p>{texts.pages.settings.placeholder}</p>
    </Page>
  )
}
