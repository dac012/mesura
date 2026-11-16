// Defined once and imported by both the router and the menu: a typo in a
// hard-coded URL (say '/fods') would not be caught by TypeScript and the
// link would silently stop working.
export const paths = {
  diary: '/',
  foods: '/foods',
  history: '/history',
  profile: '/profile',
  settings: '/settings',
}
