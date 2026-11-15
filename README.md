# PloTwist: Silent Explorers

PloTwist is a colorful, story-driven NASA Space Apps web experience for curious explorers up to age 12. It turns NASA hardware left on the Moon, Mars, and in deep space into a space-archeology trail.

## Run locally

```bash
npm start
```

Then open `http://localhost:3000`.

The site intentionally uses no build step or third-party runtime dependency. It is plain HTML, CSS, and JavaScript with a zero-dependency Node static server.

## Pages

The site uses hash routing so it works on GitHub Pages:

- `#/` — Home and mission trail
- `#/discover` — Interactive Moon map and 38 lunar records
- `#/archive` — Searchable mission archive
- `#/signal` — Live NASA sky signal and source notes

Legacy section links such as `#discoveries`, `#archive`, `#signals`, and `#sources` are mapped to their corresponding pages.

## NASA data sources

- **NASA Space Science Data Coordinated Archive (NSSDCA):** factual grounding for spacecraft, experiments, and lunar records. [Open the NSSDCA Master Catalog](https://nssdc.gsfc.nasa.gov/nmc/)
- **NASA Open APIs:** the Live Signal page requests the Near-Earth Object Feed. The app reads an optional browser-provided `window.PLOTWIST_NASA_API_KEY` first and retries once with the public `DEMO_KEY` if that request fails. The public GitHub Pages repository does not commit private API credentials into client-side JavaScript.
- **NASA/JPL Small-Body Database:** used when the live API returns an object-specific record link.

For local testing with a personal key, copy `nasa-config.example.js` to `nasa-config.js` and set `window.PLOTWIST_NASA_API_KEY`. The app checks that optional file when the Live signal page opens. `nasa-config.js` is ignored by Git. The public GitHub Pages version intentionally falls back to `DEMO_KEY` rather than exposing a private credential.

## Background sound

The ambient loop is `leberch-ambient-cinematic-628167.mp3`. It is loaded locally, loops quietly at about 30% volume, and stays active while navigating between hash pages. Browsers that block autoplay show a toast asking the explorer to tap, click, or press a key. If the file is unavailable or unsupported, the experience stays silent without breaking.

The Calm mode button now also controls the audio: turning it on fades the sound out and pauses it; turning it off resumes playback when the browser allows it. Reduced-motion preferences are respected separately from the audio control.

## Moon texture

`moon-surface.jpg` is a dependency-free procedural texture generated with Python, NumPy, and Pillow. It uses layered noise, maria, crater rims, ejecta rays, upper-left lighting, and a vignette. The final image is approximately 1500×1000 and under 300 KB.

## Accessibility notes

The site uses semantic navigation, keyboard-operable controls, visible focus styling, a skip link, `aria-current` route state, `aria-live` updates for dynamic content, reduced-motion support, and a user-facing sound control.
