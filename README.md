# Intercepted route navigation is dropped when the slot still holds it

Minimal reproduction for an App Router regression between Next.js 16.3.6 and 16.4.x.

## Steps

```sh
npm install
npm run build && npm start   # also reproduces with `npm run dev`
```

1. Open http://localhost:3000.
2. Click **Open search**. The intercepted modal (`app/@modal/(.)search`) opens and the URL becomes `/search`.
3. Click **Go to item 1** inside the modal. The URL becomes `/items/1`.
   The `@modal` slot has no matching route for `/items/1`, so it keeps the `(.)search` segment;
   the modal renders `null` outside `/search`.
4. Click **Open search** again (`router.push("/search")`).

**Expected:** the URL becomes `/search` and the modal opens (this is what 16.3.6 does).

**Actual:** nothing happens. The URL stays `/items/1` and nothing is logged.

## Results

| next | `next dev` | `next start` |
|---|---|---|
| 16.3.6 | works | works |
| 16.4.1 | broken | broken |
| 16.5.0-canary.28 | broken | broken |

`app/@modal/layout.jsx` sets `export const dynamic = "force-dynamic"`. Without it, `next start`
does not reproduce (`next dev` still does).
