# PloTwist: Silent Explorers — delivery checklist

- [x] **A complete public English website is implemented in HTML, CSS, and JavaScript.** The experience is built independently as a working responsive website for the public repository `PloTwist_NASA`, with primary project content and documentation in English.
- [x] **The site tells the story of NASA hardware left across the solar system for elementary-school children through age 12.** The narrative uses “silent explorers” and “space archeology” framing instead of presenting a dense technical catalog.
- [x] **Artifact stories cover the challenge hardware list.** The archive includes Apollo Lunar Modules, Lunar Roving Vehicles, ALSEP scientific packages, Surveyor landers, Sojourner, Spirit and Opportunity, Viking landers, Phoenix, InSight, Dawn, NEAR Shoemaker, Pioneer 10 and 11, Ingenuity, and Kepler.
- [x] **Each story explains purpose, science, and current status or final resting place in age-appropriate English.** Every archive card opens an accessible field-note drawer with mission, science clue, and “where it is now” copy.
- [x] **The experience supports exploration by destination, mission era, and story progression.** Children can follow a five-step mission trail, filter the archive by Moon, Mars, or Deep space, and search by machine or mission.
- [x] **The visual design is colorful, engaging, and interactive.** The interface uses a child-friendly space-archeology visual system, CSS illustrations, progress steps, hover states, logging feedback, and a live signal panel.
- [x] **At least one NASA data source is used.** Artifact content is grounded in the NASA Space Science Data Coordinated Archive (NSSDCA) Master Catalog and links directly to the public catalog and a specific Apollo 12 NSSDCA record.
- [x] **NASA’s public `DEMO_KEY` is used.** The live signal panel calls NASA’s Near Earth Object Feed API with `DEMO_KEY`, shows loading and empty states, and gracefully falls back when the demo quota or network is unavailable.
- [x] **NASA source attribution is visible.** The source section links to NSSDCA and NASA Open APIs; the live card names NASA’s data stream and includes an API source link.
- [x] **Accessibility and responsive behavior are included.** Semantic landmarks, a skip link, keyboard-operable buttons, visible focus states, readable contrast, live regions, alternative text for the CSS illustration, reduced-motion support, and mobile layouts are implemented.


## Discovery-first update

- [x] **Discovery is the central activity.** The Start the mission action now takes explorers to a landing-site map before the archive, and the mission trail language asks children to follow evidence and questions.
- [x] **A clickable Moon discovery map is included.** Children can select approximate NASA landing locations, read a site summary and clue, and see the matching records highlighted.
- [x] **The 38 lunar records are searchable and clickable.** The explorer includes 38 child-friendly NASA lunar records with filters for hardware, science, and mission records, plus search by mission, site, type, or fact.
- [x] **Each archive artifact includes a discovery question.** Field notes now ask a child-friendly question such as why equipment was left behind or what clue the instrument could reveal.
- [x] **Artifact scope is explicit.** The main archive labels stories as surface artifacts, historical missions, deep-space missions, or mission records so children do not learn that every story is abandoned hardware on the Moon or Mars.
- [x] **NASA data framing is clear.** The Moon explorer states that the 38 cards are records connected to lunar missions and the NSSDCA catalog, not 38 separate spacecraft.
