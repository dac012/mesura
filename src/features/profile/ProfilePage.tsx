import { texts } from '../../shared/texts'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function ProfilePage() {
  return (
    <Page title={texts.pages.profile.title}>
      <p>{texts.pages.profile.placeholder}</p>
    </Page>
  )
}
