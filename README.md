# DAPRINXE

Official site for the hip-hop artist **DAPRINXE** — dark, cinematic, and built for the Real Ones.

The homepage follows the artist preview: distressed wordmark, blood-red CTAs, *Crazy* and *Billie Jean* out now, plus merch, tour, and the join list. Videos is the next page after Home and embeds the official *Crazy* visual.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Homepage |
| `/videos` | Music videos. *Crazy* is live. Add more YouTube links in the browser. |
| `/music` | Catalog. Add songs and paste Spotify / Apple / YouTube / SoundCloud / Tidal URLs. |
| `/merch` | Store. Hoodie, tee, cap, nameplate chain. |
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

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui.

Swap the generated stills in `public/images/` for final photography whenever you have it. The *Crazy* thumbnail is the official YouTube frame.
