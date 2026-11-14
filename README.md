# PloTwist: Silent Explorers

PloTwist is a colorful, story-driven NASA Space Apps web experience for curious explorers up to age 12. It turns NASA hardware left on the Moon, Mars, and in deep space into a space-archeology trail: children can follow a mission story, filter artifact field notes, log discoveries, and check a live NASA sky signal.

## Run locally

```bash
npm start
```

Then open `http://localhost:3000`.

The site intentionally uses no build step or third-party runtime dependency. It is a small HTML, CSS, and JavaScript experience with a zero-dependency Node static server for Preview.

## NASA data sources

- **NASA Space Science Data Coordinated Archive (NSSDCA):** the primary factual grounding for the spacecraft and experiment field notes. [Open the NSSDCA Master Catalog](https://nssdc.gsfc.nasa.gov/nmc/)
- **NASA Open APIs:** the live signal panel requests the Near Earth Object Feed endpoint using the public `DEMO_KEY`. If the demo quota or network is unavailable, the interface explains that the signal is shy and keeps the archive usable. [Explore NASA Open APIs](https://api.nasa.gov/)

## Experience map

- **Mission:** five short story steps that introduce footprints, quiet science, Martian wheels, far flyers, and the explorer’s log.
- **Archive:** searchable cards for the Moon, Mars, and deep-space artifacts named in the challenge brief.
- **Live signal:** a resilient NASA API panel for today’s near-Earth objects.
- **Sources:** clear attribution to NASA’s public catalog and API portal.

## Accessibility notes

The page uses semantic sections and navigation, keyboard-operable controls, visible focus styling, a skip link, `aria-live` updates for dynamic content, reduced-motion support, and a user-facing Calm mode.
