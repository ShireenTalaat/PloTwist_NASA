const artifacts = [
  { id: 'apollo-lm', name: 'Apollo lunar modules', destination: 'Moon', era: '1969–72', type: 'Descent stages', accent: 'coral', callout: 'A launch pad that stayed behind.', mission: 'The Lunar Module carried astronauts down to the Moon, then its descent stage became a sturdy platform for the trip home.', science: 'Apollo landers helped astronauts collect rocks, photograph the surface and place experiments where Earth could not.', resting: 'Descent stages are still parked at Apollo landing sites on the Moon.', link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C' },
  { id: 'lrv', name: 'Lunar roving vehicles', destination: 'Moon', era: '1971–72', type: 'Electric moon buggies', accent: 'yellow', callout: 'The first road trips beyond Earth.', mission: 'Three battery-powered LRVs let Apollo astronauts travel farther from their landers and carry more tools and samples.', science: 'They expanded the area astronauts could explore, turning a walk into a proper field expedition.', resting: 'The three moon buggies remain where their final crews parked them.', link: 'https://nssdc.gsfc.nasa.gov/nmc/' },
  { id: 'alsep', name: 'ALSEP packages', destination: 'Moon', era: '1969–72', type: 'Science stations', accent: 'teal', callout: 'A tiny science lab with a very big view.', mission: 'Apollo astronauts unfolded scientific instruments and connected them to a central station on the lunar surface.', science: 'Seismometers listened for moonquakes, while other instruments studied dust, magnets, the thin atmosphere and solar wind.', resting: 'The stations worked for years and were switched off in 1977. Their experiments are now lunar time capsules.', link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C' },
  { id: 'surveyor', name: 'Surveyor landers', destination: 'Moon', era: '1966–68', type: 'Robotic landers', accent: 'blue', callout: 'The scouts who tested the landing.', mission: 'Surveyor robots were sent ahead of Apollo to prove that a spacecraft could land softly on the Moon.', science: 'They photographed the ground and tested the soil, helping engineers design safer crewed landings.', resting: 'The landers remain at their landing sites. Apollo 12 even visited Surveyor 3 and brought parts home.', link: 'https://nssdc.gsfc.nasa.gov/nmc/' },
  { id: 'sojourner', name: 'Sojourner', destination: 'Mars', era: '1997', type: 'Pathfinder rover', accent: 'coral', callout: 'The little rover that opened the road.', mission: 'Sojourner rolled down from the Pathfinder lander and became the first rover to explore Mars.', science: 'Its wheels and cameras showed that a small robot could safely drive across another planet and inspect rocks up close.', resting: 'Sojourner is still at the Pathfinder landing site in Ares Vallis.', link: 'https://mars.nasa.gov/mer/mission/rover/spirit/' },
  { id: 'spirit-opportunity', name: 'Spirit & Opportunity', destination: 'Mars', era: '2004–18', type: 'Twin rovers', accent: 'teal', callout: 'Two explorers who refused to hurry.', mission: 'The twin rovers were built for short missions, but they kept driving and investigating Mars for years.', science: 'They found evidence that ancient Mars once had water flowing across its surface.', resting: 'Both rovers are now inactive monuments to exploration on Mars.', link: 'https://mars.nasa.gov/mer/mission/rover/spirit/' },
  { id: 'viking', name: 'Viking 1 & 2', destination: 'Mars', era: '1976', type: 'First successful landers', accent: 'yellow', callout: 'The first American voices from Mars.', mission: 'Viking 1 and 2 became the first U.S. landers to successfully operate on Mars.', science: 'They photographed the surface, measured the atmosphere and ran experiments looking for signs of life.', resting: 'Both landers remain exactly where they touched down.', link: 'https://nssdc.gsfc.nasa.gov/nmc/' },
  { id: 'phoenix', name: 'Phoenix', destination: 'Mars', era: '2008', type: 'Ice-hunting lander', accent: 'blue', callout: 'The digger who found water ice.', mission: 'Phoenix landed near Mars’s north pole with a robotic scoop made to dig into the soil.', science: 'It confirmed water ice just beneath the dusty surface and studied the chemistry of Martian dirt.', resting: 'Phoenix is a stationary artifact on Mars after its power faded in the cold.', link: 'https://mars.nasa.gov/mars-exploration/missions/phoenix/' },
  { id: 'insight', name: 'InSight', destination: 'Mars', era: '2018–22', type: 'Marsquake listener', accent: 'purple', callout: 'The explorer who listened down deep.', mission: 'InSight placed a sensitive seismometer on Mars and gently pushed a heat probe into the ground.', science: 'Marsquakes revealed clues about the inside of a rocky planet — its crust, mantle and core.', resting: 'InSight stays at Elysium Planitia, quiet after dust covered its solar panels.', link: 'https://mars.nasa.gov/insight/' },
  { id: 'dawn', name: 'Dawn', destination: 'Deep space', era: '2007–18', type: 'Asteroid explorer', accent: 'teal', callout: 'The traveler who orbited two worlds.', mission: 'Dawn used an ion engine to visit Vesta and then Ceres — the first spacecraft to orbit two extraterrestrial bodies.', science: 'It helped scientists compare a rocky protoplanet with a dwarf planet and learn how the solar system grew up.', resting: 'Dawn remains in an unpowered orbit around Ceres after running out of fuel.', link: 'https://solarsystem.nasa.gov/missions/dawn/in-depth/' },
  { id: 'near', name: 'NEAR Shoemaker', destination: 'Deep space', era: '1996–2001', type: 'Asteroid lander', accent: 'orange', callout: 'The first to park on an asteroid.', mission: 'NEAR Shoemaker became the first spacecraft to orbit and land on an asteroid: 433 Eros.', science: 'Its instruments mapped the asteroid’s shape, surface and composition, like a geologist with a very distant field site.', resting: 'NEAR Shoemaker is resting on the surface of Eros.', link: 'https://solarsystem.nasa.gov/missions/near-shoemaker/in-depth/' },
  { id: 'pioneer', name: 'Pioneer 10 & 11', destination: 'Deep space', era: '1972–73', type: 'Outer-planet probes', accent: 'yellow', callout: 'The postcards that kept traveling.', mission: 'Pioneer 10 and 11 were early explorers of the outer planets and the first craft to travel through the asteroid belt.', science: 'They sent back the first close-up views of Jupiter and Saturn and tested the route for later missions.', resting: 'Both are silent and drifting outward, carrying messages from Earth into deep space.', link: 'https://science.nasa.gov/mission/pioneer-10/' },
  { id: 'ingenuity', name: 'Ingenuity', destination: 'Mars', era: '2021–24', type: 'Mars helicopter', accent: 'coral', callout: 'The first aircraft on another planet.', mission: 'Ingenuity was a small technology demonstrator that arrived on Mars tucked beneath the Perseverance rover.', science: 'Its flights proved that powered flight is possible in the thin Martian atmosphere and helped scout routes.', resting: 'Ingenuity is now a stationary artifact after rotor damage ended its flights.', link: 'https://mars.nasa.gov/technology/helicopter/' },
  { id: 'kepler', name: 'Kepler telescope', destination: 'Deep space', era: '2009–18', type: 'Exoplanet hunter', accent: 'purple', callout: 'The telescope that counted distant worlds.', mission: 'Kepler watched a patch of stars and looked for tiny dips in their brightness — the shadows of planets crossing in front.', science: 'It revealed thousands of exoplanet candidates and changed how we understand the galaxy’s worlds.', resting: 'Kepler is drifting in an Earth-trailing orbit after its fuel ran out.', link: 'https://science.nasa.gov/mission/kepler/' }
];

const storySteps = [
  { destination: 'THE MOON', title: 'Start with the footprints.', text: 'When astronauts left the Moon, they did not take every machine home. Some hardware stayed behind as a time capsule — a snapshot of what humans could build, drive and measure in a place 384,400 kilometers away.', hint: 'Clue: look for the things that became launch pads.' },
  { destination: 'LISTEN CLOSELY', title: 'Science can be quiet.', text: 'An ALSEP station did not need a bright screen or a loud engine. It listened for moonquakes, measured the solar wind and watched dust settle. InSight later did something similar on Mars.', hint: 'Clue: some explorers work best when they are still.' },
  { destination: 'MARS', title: 'Then the wheels got brave.', text: 'Sojourner was small enough to fit in a lander, but it changed the way we explore. Spirit and Opportunity followed, turning red dust, rocks and old water clues into a story we could read from Earth.', hint: 'Clue: a tiny wheel can open a huge new road.' },
  { destination: 'DEEP SPACE', title: 'Some explorers never parked.', text: 'Dawn, Pioneer, NEAR Shoemaker and Kepler all carried their questions farther. Some found worlds, some found asteroids, and some are still drifting with a message from Earth.', hint: 'Clue: not every final resting place is a surface.' },
  { destination: 'YOUR LOG', title: 'Choose your silent explorer.', text: 'You have the field guide now. Pick one artifact, open its note and log it. A good space explorer does not only remember the machine — they remember the question it helped us ask.', hint: 'Clue: your next mission starts with curiosity.' }
];

const state = { filter: 'all', search: '', storyStep: 0, found: new Set(), lastFocused: null };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderArtifacts() {
  const grid = $('#archiveGrid');
  const query = state.search.trim().toLowerCase();
  const matches = artifacts.filter((artifact) => {
    const filterMatch = state.filter === 'all' || artifact.destination === state.filter;
    const searchMatch = !query || [artifact.name, artifact.destination, artifact.type, artifact.callout].join(' ').toLowerCase().includes(query);
    return filterMatch && searchMatch;
  });
  $('#emptyState').hidden = matches.length > 0;
  grid.innerHTML = matches.map((artifact) => `
    <button class="artifact-card" data-accent="${artifact.accent}" data-artifact-id="${artifact.id}" type="button" aria-label="Open field note for ${artifact.name}">
      <span class="card-top"><span class="card-destination">${artifact.destination} · ${artifact.era}</span><span class="card-icon" aria-hidden="true"></span></span>
      <span class="card-title">${artifact.name}</span>
      <span class="card-footer"><span class="card-type">${artifact.type}${state.found.has(artifact.id) ? '<br /><span class="card-found">logged</span>' : ''}</span><span class="card-arrow" aria-hidden="true">↗</span></span>
    </button>`).join('');
  $$('.artifact-card').forEach((card) => card.addEventListener('click', () => openArtifact(card.dataset.artifactId)));
}

function renderStory() {
  const step = storySteps[state.storyStep];
  $('#storyNumber').textContent = String(state.storyStep + 1).padStart(2, '0');
  $('#storyDestination').textContent = step.destination;
  $('#storyTitle').textContent = step.title;
  $('#storyText').textContent = step.text;
  $('#storyHint').textContent = step.hint;
  $('#storyNext').innerHTML = state.storyStep === storySteps.length - 1 ? 'Open the archive <span aria-hidden="true">↓</span>' : 'Next clue <span aria-hidden="true">→</span>';
  $$('.mission-step').forEach((button) => button.classList.toggle('is-active', Number(button.dataset.step) === state.storyStep));
}

function openArtifact(id) {
  const artifact = artifacts.find((item) => item.id === id);
  if (!artifact) return;
  state.lastFocused = document.activeElement;
  $('#drawerDestination').textContent = artifact.destination.toUpperCase();
  $('#drawerEra').textContent = artifact.era;
  $('#drawerStatus').textContent = artifact.destination === 'Deep space' ? 'STATUS: DRIFTING' : 'STATUS: RESTING';
  $('#drawerTitle').textContent = artifact.name;
  $('#drawerCallout').textContent = artifact.callout;
  $('#drawerMission').textContent = artifact.mission;
  $('#drawerScience').textContent = artifact.science;
  $('#drawerResting').textContent = artifact.resting;
  $('#drawerSource').href = artifact.link;
  $('#drawerArt').dataset.accent = artifact.accent;
  $('#logDiscovery').dataset.artifactId = artifact.id;
  $('#artifactDrawer').classList.add('is-open');
  $('#artifactDrawer').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('#drawerClose').focus();
}

function closeDrawer() {
  $('#artifactDrawer').classList.remove('is-open');
  $('#artifactDrawer').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (state.lastFocused) state.lastFocused.focus();
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

async function loadCosmicDispatch() {
  const content = $('#liveContent');
  content.innerHTML = '<div class="loader-orbit" aria-label="Loading NASA data"></div><p>Scanning today’s sky…</p>';
  const date = todayUTC();
  try {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=DEMO_KEY`, { signal: AbortSignal.timeout(9000) });
    if (!response.ok) throw new Error('NASA API unavailable');
    const data = await response.json();
    const visitors = Object.values(data.near_earth_objects || {}).flat();
    const closest = [...visitors].sort((a, b) => Number(a.close_approach_data?.[0]?.miss_distance?.lunar || Infinity) - Number(b.close_approach_data?.[0]?.miss_distance?.lunar || Infinity))[0];
    if (!closest) {
      content.innerHTML = `<h3>Quiet sky, busy universe.</h3><p>NASA’s live feed found no near-Earth visitors listed for ${date}. That does not mean space stopped — it means our little window is clear.</p><a class="live-link" href="https://api.nasa.gov/" target="_blank" rel="noreferrer">See the NASA API source ↗</a>`;
      return;
    }
    const distance = Math.round(Number(closest.close_approach_data?.[0]?.miss_distance?.lunar || 0) * 10) / 10;
    const size = Math.round(Number(closest.estimated_diameter?.meters?.estimated_diameter_max || 0));
    content.innerHTML = `<h3>${closest.name.replace(/[()]/g, '')}</h3><p>NASA’s feed lists this near-Earth visitor for today. It is not headed for us — it is a reminder that our solar system is always in motion.</p><div class="live-stats"><div class="live-stat"><strong>${distance}</strong><span>Moon distances away</span></div><div class="live-stat"><strong>${size}m</strong><span>estimated max width</span></div></div><a class="live-link" href="${closest.nasa_jpl_url || 'https://api.nasa.gov/'}" target="_blank" rel="noreferrer">Open the JPL record ↗</a>`;
  } catch (error) {
    content.innerHTML = '<h3>The signal is shy today.</h3><p>The public demo feed is busy or out of reach. The archive is still ready, and the NASA source is waiting when the signal returns.</p><a class="live-link" href="https://api.nasa.gov/" target="_blank" rel="noreferrer">Try NASA Open APIs ↗</a>';
  }
}

function bindEvents() {
  $$('.filter-chip').forEach((chip) => chip.addEventListener('click', () => {
    state.filter = chip.dataset.filter;
    $$('.filter-chip').forEach((item) => item.classList.toggle('is-active', item === chip));
    renderArtifacts();
  }));
  $('#archiveSearch').addEventListener('input', (event) => { state.search = event.target.value; renderArtifacts(); });
  $$('.mission-step').forEach((button) => button.addEventListener('click', () => { state.storyStep = Number(button.dataset.step); renderStory(); }));
  $('#storyNext').addEventListener('click', () => {
    if (state.storyStep < storySteps.length - 1) { state.storyStep += 1; renderStory(); }
    else document.querySelector('#archive').scrollIntoView({ behavior: 'smooth' });
  });
  $('#startMission').addEventListener('click', () => { state.storyStep = 0; renderStory(); document.querySelector('#mission').scrollIntoView({ behavior: 'smooth' }); });
  $('#drawerClose').addEventListener('click', closeDrawer);
  $$('.drawer-backdrop').forEach((backdrop) => backdrop.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && $('#artifactDrawer').classList.contains('is-open')) closeDrawer(); });
  $('#logDiscovery').addEventListener('click', () => {
    const id = $('#logDiscovery').dataset.artifactId;
    if (!state.found.has(id)) { state.found.add(id); renderArtifacts(); showToast('Discovery logged. Keep following the trail.'); }
    else showToast('You already logged this explorer. Good memory.');
  });
  $('#refreshSignal').addEventListener('click', loadCosmicDispatch);
  $('#motionToggle').addEventListener('click', () => {
    const calm = document.body.classList.toggle('calm-mode');
    $('#motionToggle').setAttribute('aria-pressed', String(calm));
    $('#motionToggle').innerHTML = calm ? '<span aria-hidden="true">◉</span> Motion paused' : '<span aria-hidden="true">◌</span> Calm mode';
  });
}

renderArtifacts();
renderStory();
bindEvents();
loadCosmicDispatch();
