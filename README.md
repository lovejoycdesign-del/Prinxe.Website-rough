# DAPRINXE

Official site for the hip-hop artist **DAPRINXE** — dark, cinematic, and built for the Real Ones.

The homepage follows the artist preview: distressed wordmark, blood-red CTAs, *Crazy* and *Billie Jean* out now, plus merch, tour, and the join list. Videos is the next page after Home and embeds the official *Crazy* visual.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Homepage |
| `/videos` | Music videos. *Crazy* is live. Add more YouTube links in the browser. |
| `/music` | Catalog. Add songs and paste Spotify / Apple / YouTube / SoundCloud / Tidal URLs. |
| `/merch` | Store. Hoodie, tee, cap, shorts. |
| `/tour` | Upcoming dates and tickets. |
| `/about` | Artist story |
| `/contact` | Bookings and press |
| `/pay` | Demo checkout — merch, tips, tickets, booking deposits |
| `/inbox` | Fan DMs |
| `/join` | Real Ones list |
| `/book` | Shows, features, sessions |
| `/press` | One-sheet / EPK |

Song links, extra videos, the bag, and fan messages save in **this browser** (`localStorage`). Nothing is charged on `/pay` — it is a walkthrough till until a real processor is wired in.

## Run locally

Needs Node 20+.

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build
npm start
```

## Deploy on Netlify

This is a Next.js app. Let Netlify **build** it. Do not drag the `.next` folder into the dashboard.

1. Push this repo to GitHub (`lovejoycdesign-del/Prinxe.Website-rough`).
2. In [Netlify](https://app.netlify.com) click **Add new site** → **Import an existing project** → **GitHub**.
3. Pick `Prinxe.Website-rough`.
4. Confirm the settings (already in `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** `22`
5. Click **Deploy site**. Netlify installs Next.js support automatically.

Every later push to `main` rebuilds the live site.

CLI option from your laptop (after `npm install -g netlify-cli` and `netlify login`):

```bash
npm install
netlify deploy --build --prod
```

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui.

Swap the generated stills in `public/images/` for final photography whenever you have it. The *Crazy* thumbnail is the official YouTube frame.
