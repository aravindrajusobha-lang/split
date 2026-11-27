# Smart Split frontend

React 18 + Vite frontend for the Real-Time Bill-Splitting & Utility Payment Aggregator. The existing Express API remains at the repository root; the browser app lives in `client/` so the backend's current `src/` tree stays intact.

## Start

```sh
cd client
npm install
npm run dev
```

Vite serves the client at `http://localhost:5173`. In development, MSW starts by default and can be disabled with `VITE_USE_MOCKS=false`. Set `VITE_API_BASE_URL` and `VITE_SOCKET_URL` in a local `.env` when connecting to the backend. The API client is rooted at `/api/v1`.

## Phase 0 foundation

- Redux Toolkit store and RTK Query base API with feature tag types.
- React Router v6 shell, desktop sidebar, mobile bottom navigation, and not-found route.
- Persistent light/dark theme, responsive overview dashboard, and MSW browser worker.
- Utility features can extend the shared API with `injectEndpoints` in later phases.

## Scripts

`npm run dev`, `npm run build`, `npm run test`, `npm run lint`.
