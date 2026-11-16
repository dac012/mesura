import { texts } from '../../shared/texts'
import { Page } from '../../shared/ui/Page'

// Placeholder screen; real content arrives in a later phase.
export function DiaryPage() {
  return (
    <Page title={texts.pages.diary.title}>
      <p>{texts.pages.diary.placeholder}</p>
    </Page>
  )
}
