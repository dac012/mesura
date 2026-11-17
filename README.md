# Mesura

Mindful calorie and nutrition tracking — a progressive web app that works on mobile and desktop.

> 🚧 Work in progress.

**Live app:** https://dac012.github.io/mesura/ — deployed automatically from `main` with GitHub Actions.

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for navigation between screens
- CSS Modules for component-scoped styles, [Lucide](https://lucide.dev/) icons
- [i18next](https://www.i18next.com/) for translations, Intl for date and number formatting
- [Oxlint](https://oxc.rs/) and [Prettier](https://prettier.io/)
- [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) for tests

## Getting started

Requires [Node.js](https://nodejs.org/) (LTS).

```bash
npm install
npm run dev
```

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the development server         |
| `npm run build`        | Type-check and build for production  |
| `npm run preview`      | Preview the production build locally |
| `npm test`             | Run the tests once                   |
| `npm run test:watch`   | Re-run the tests on every file save  |
| `npm run lint`         | Lint the code with Oxlint            |
| `npm run format`       | Format all files with Prettier       |
| `npm run format:check` | Check formatting without writing     |

## License

[MIT](LICENSE)
