# Deploy — Cloudflare Workers (Static Assets)

The Kembara UF demo deploys as **static assets on Cloudflare Workers** — this is the current recommended path (Workers Sites is deprecated; Cloudflare is steering Pages users here as well). No Worker script is needed for a pure static site, so requests are served directly from Cloudflare's edge with no cold start.

> Note: this project runs on Emergent's React setup. The frontend source lives in `/app/frontend/`. When deploying to Cloudflare Workers, `cd frontend`, run `yarn build`, and Cloudflare will serve the resulting `build/` folder (adjust `directory` in `wrangler.jsonc` if you rename).

## One-time setup

```bash
# From /app or /app/frontend, whichever holds wrangler.jsonc
npx wrangler login    # opens a browser tab; authenticate with your Cloudflare account
```

## Deploy

```bash
cd frontend
yarn build            # produces frontend/build/
npx wrangler deploy   # or: yarn deploy (see package.json script)
```

Wrangler prints the resulting preview URL — it looks like `https://kembara-uf-demo.<your-subdomain>.workers.dev`. Share that link with the client.

## Rolling back

```bash
npx wrangler deployments list
npx wrangler rollback <deployment-id>
```

## Custom domain (when it becomes production)

- Cloudflare dashboard → **Workers & Pages** → select `kembara-uf-demo` → **Settings** → **Domains & Routes** → **Add Custom Domain**.
- Only do this once the client signs off — the `*.workers.dev` URL is a review preview, not a production domain.

## Notes

- `not_found_handling: "404-page"` in `wrangler.jsonc` serves your build's own 404 page for any missing route.
- If the app grows a router later, switch to `"single-page-application"` to route everything to `index.html`.
- CRA outputs to `build/`; if you migrate to Vite later, change `directory` to `./dist`.
