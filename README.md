# DA PRINXE

Official site for the hip-hop artist **DA PRINXE** — dark, cinematic, and built for the Real Ones.

The homepage follows the artist preview: distressed wordmark, blood-red CTAs, *Crazy* and *Billie Jean* out now, plus merch, contact, and the join list. Videos is the next page after Home and embeds the official *Crazy* visual.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Homepage |
| `/videos` | Music videos. *Crazy* is live. Add more YouTube links in the browser. |
| `/music` | Catalog. Add songs and paste Spotify / Apple / YouTube / SoundCloud / Tidal URLs. |
| `/merch` | Store. Hoodie, tee, cap, shorts. |
| `/contact` | Artist (empty) and manager LJ Chirombo. |
| `/about` | Artist story |
| `/pay` | Payment / The Bag — Cash App `$legenddakidd` QR, plus a demo merch till |
| `/inbox` | Fan DMs |
| `/join` | Real Ones list |
| `/book` | Shows, features, sessions |
| `/press` | One-sheet / EPK |

Song links, extra videos, the bag, and fan messages save in **this browser** (`localStorage`). Tips on `/pay` go to Cash App at [$legenddakidd](https://cash.app/$legenddakidd). Merch and booking deposits on that page are still a walkthrough till.

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

Covers and stills on the site are empty scenes and product shots — no portraits. Swap them for final art whenever you have it.
