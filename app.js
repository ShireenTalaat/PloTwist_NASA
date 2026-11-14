const artifacts = [
  { id: 'apollo-lm', name: 'Apollo lunar modules', destination: 'Moon', era: '1969–72', type: 'Descent stages', scope: 'surface artifact', accent: 'coral', callout: 'A launch pad that stayed behind.', mission: 'The Lunar Module carried astronauts down to the Moon, then its descent stage became a sturdy platform for the trip home.', science: 'Apollo landers helped astronauts collect rocks, photograph the surface and place experiments where Earth could not.', resting: 'Descent stages are still parked at Apollo landing sites on the Moon.', question: 'Why do you think astronauts left the sturdy bottom half behind?', link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C' },
  { id: 'lrv', name: 'Lunar roving vehicles', destination: 'Moon', era: '1971–72', type: 'Electric moon buggies', scope: 'surface artifact', accent: 'yellow', callout: 'The first road trips beyond Earth.', mission: 'Three battery-powered LRVs let Apollo astronauts travel farther from their landers and carry more tools and samples.', science: 'They expanded the area astronauts could explore, turning a walk into a proper field expedition.', resting: 'The three moon buggies remain where their final crews parked them.', question: 'Where would you drive a moon buggy if you had one afternoon?', link: 'https://nssdc.gsfc.nasa.gov/nmc/' },
  { id: 'alsep', name: 'ALSEP packages', destination: 'Moon', era: '1969–72', type: 'Science stations', scope: 'surface artifact', accent: 'teal', callout: 'A tiny science lab with a very big view.', mission: 'Apollo astronauts unfolded scientific instruments and connected them to a central station on the lunar surface.', science: 'Seismometers listened for moonquakes, while other instruments studied dust, magnets, the thin atmosphere and solar wind.', resting: 'The stations worked for years and were switched off in 1977. Their experiments are now lunar time capsules.', question: 'What sound or shake would you want a moon science station to detect?', link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C' },
  { id: 'surveyor', name: 'Surveyor landers', destination: 'Moon', era: '1966–68', type: 'Robotic landers', scope: 'surface artifact', accent: 'blue', callout: 'The scouts who tested the landing.', mission: 'Surveyor robots were sent ahead of Apollo to prove that a spacecraft could land softly on the Moon.', science: 'They photographed the ground and tested the soil, helping engineers design safer crewed landings.', resting: 'The landers remain at their landing sites. Apollo 12 even visited Surveyor 3 and brought parts home.', question: 'What would you test first before sending friends to a new world?', link: 'https://nssdc.gsfc.nasa.gov/nmc/' },
  { id: 'sojourner', name: 'Sojourner', destination: 'Mars', era: '1997', type: 'Pathfinder rover', scope: 'surface artifact', accent: 'coral', callout: 'The little rover that opened the road.', mission: 'Sojourner rolled down from the Pathfinder lander and became the first rover to explore Mars.', science: 'Its wheels and cameras showed that a small robot could safely drive across another planet and inspect rocks up close.', resting: 'Sojourner is still at the Pathfinder landing site in Ares Vallis.', question: 'What clue would you look for in a rock on Mars?', link: 'https://mars.nasa.gov/mer/mission/rover/spirit/' },
  { id: 'spirit-opportunity', name: 'Spirit & Opportunity', destination: 'Mars', era: '2004–18', type: 'Twin rovers', scope: 'surface artifact', accent: 'teal', callout: 'Two explorers who refused to hurry.', mission: 'The twin rovers were built for short missions, but they kept driving and investigating Mars for years.', science: 'They found evidence that ancient Mars once had water flowing across its surface.', resting: 'Both rovers are now inactive monuments to Mars exploration.', question: 'Why might two rovers make a better team than one?', link: 'https://mars.nasa.gov/mer/mission/rover/spirit/' },
  { id: 'viking', name: 'Viking 1 & 2', destination: 'Mars', era: '1976', type: 'First successful landers', scope: 'surface artifact', accent: 'yellow', callout: 'The first American voices from Mars.', mission: 'Viking 1 and 2 became the first U.S. landers to successfully operate on Mars.', science: 'They photographed the surface, measured the atmosphere and ran experiments looking for signs of life.', resting: 'Both landers remain exactly where they touched down.', question: 'Which life-searching experiment would you invent for a lander?', link: 'https://nssdc.gsfc.nasa.gov/nmc/' },
  { id: 'phoenix', name: 'Phoenix', destination: 'Mars', era: '2008', type: 'Ice-hunting lander', scope: 'surface artifact', accent: 'blue', callout: 'The digger who found water ice.', mission: 'Phoenix landed near Mars’s north pole with a robotic scoop made to dig into the soil.', science: 'It confirmed water ice just beneath the dusty surface and studied the chemistry of Martian dirt.', resting: 'Phoenix is a stationary artifact on Mars after its power faded in the cold.', question: 'How could a robot prove that ice is hiding under dust?', link: 'https://mars.nasa.gov/mars-exploration/missions/phoenix/' },
  { id: 'insight', name: 'InSight', destination: 'Mars', era: '2018–22', type: 'Marsquake listener', scope: 'surface artifact', accent: 'purple', callout: 'The explorer who listened down deep.', mission: 'InSight placed a sensitive seismometer on Mars and gently pushed a heat probe into the ground.', science: 'Marsquakes revealed clues about the inside of a rocky planet — its crust, mantle and core.', resting: 'InSight stays at Elysium Planitia, quiet after dust covered its solar panels.', question: 'If Mars shakes, what could that tell us about its inside?', link: 'https://mars.nasa.gov/insight/' },
  { id: 'dawn', name: 'Dawn', destination: 'Deep space', era: '2007–18', type: 'Asteroid explorer', scope: 'deep-space mission', accent: 'teal', callout: 'The traveler who orbited two worlds.', mission: 'Dawn used an ion engine to visit Vesta and then Ceres — the first spacecraft to orbit two extraterrestrial bodies.', science: 'It helped scientists compare a rocky protoplanet with a dwarf planet and learn how the solar system grew up.', resting: 'Dawn remains in an unpowered orbit around Ceres after running out of fuel.', question: 'Why would visiting two different worlds help scientists compare them?', link: 'https://solarsystem.nasa.gov/missions/dawn/in-depth/' },
  { id: 'near', name: 'NEAR Shoemaker', destination: 'Deep space', era: '1996–2001', type: 'Asteroid lander', scope: 'deep-space mission', accent: 'orange', callout: 'The first to park on an asteroid.', mission: 'NEAR Shoemaker became the first spacecraft to orbit and land on an asteroid: 433 Eros.', science: 'Its instruments mapped the asteroid’s shape, surface and composition, like a geologist with a very distant field site.', resting: 'NEAR Shoemaker is resting on the surface of Eros.', question: 'What shape do you imagine an asteroid might have up close?', link: 'https://solarsystem.nasa.gov/missions/near-shoemaker/in-depth/' },
  { id: 'pioneer', name: 'Pioneer 10 & 11', destination: 'Deep space', era: '1972–73', type: 'Outer-planet probes', scope: 'deep-space mission', accent: 'yellow', callout: 'The postcards that kept traveling.', mission: 'Pioneer 10 and 11 were early explorers of the outer planets and the first craft to travel through the asteroid belt.', science: 'They sent back the first close-up views of Jupiter and Saturn and tested the route for later missions.', resting: 'Both are silent and drifting outward, carrying messages from Earth into deep space.', question: 'If you could send one small message into space, what would it say?', link: 'https://science.nasa.gov/mission/pioneer-10/' },
  { id: 'ingenuity', name: 'Ingenuity', destination: 'Mars', era: '2021–24', type: 'Mars helicopter', scope: 'surface artifact', accent: 'coral', callout: 'The first aircraft on another planet.', mission: 'Ingenuity was a small technology demonstrator that arrived on Mars tucked beneath the Perseverance rover.', science: 'Its flights proved that powered flight is possible in the thin Martian atmosphere and helped scout routes.', resting: 'Ingenuity is now a stationary artifact after rotor damage ended its flights.', question: 'Why could flying help a rover choose a safer path?', link: 'https://mars.nasa.gov/technology/helicopter/' },
  { id: 'kepler', name: 'Kepler telescope', destination: 'Deep space', era: '2009–18', type: 'Exoplanet hunter', scope: 'historical mission', accent: 'purple', callout: 'The telescope that counted distant worlds.', mission: 'Kepler watched a patch of stars and looked for tiny dips in their brightness — the shadows of planets crossing in front.', science: 'It revealed thousands of exoplanet candidates and changed how we understand the galaxy’s worlds.', resting: 'Kepler is drifting in an Earth-trailing orbit after its fuel ran out.', question: 'How can a tiny dip in starlight reveal a planet?', link: 'https://science.nasa.gov/mission/kepler/' }
];

const storySteps = [
  { destination: 'THE MOON', title: 'Start with the footprints.', text: 'A young explorer begins with a place. Pick a landing site, ask what NASA left there, and let the evidence lead you to the next clue.', hint: 'Clue: start where the first footprints became a map.' },
  { destination: 'LISTEN CLOSELY', title: 'Science can be quiet.', text: 'An ALSEP station did not need a bright screen or a loud engine. It listened for moonquakes, measured the solar wind and watched dust settle.', hint: 'Clue: some explorers work best when they are still.' },
  { destination: 'MARS', title: 'Then the wheels got brave.', text: 'Sojourner was small enough to fit in a lander, but it changed the way we explore. Spirit and Opportunity turned red dust and old water clues into a story we could read from Earth.', hint: 'Clue: a tiny wheel can open a huge new road.' },
  { destination: 'DEEP SPACE', title: 'Some explorers never parked.', text: 'Dawn, Pioneer, NEAR Shoemaker and Kepler all carried their questions farther. Some found worlds, some found asteroids, and some are still drifting with a message from Earth.', hint: 'Clue: not every final resting place is a surface.' },
  { destination: 'YOUR LOG', title: 'Choose your silent explorer.', text: 'You have the field guide now. Pick one artifact, open its note and log it. A good space explorer remembers the question a machine helped us ask.', hint: 'Clue: your next mission starts with curiosity.' }
];

const lunarSites = [
  { id: 'tranquility', name: 'Mare Tranquillitatis', short: 'Apollo 11', lat: 0.67, lon: 23.47, summary: 'The first human landing site. Eagle’s descent stage and the early science package stayed behind.', clue: 'Look for records about first footprints, quiet instruments and a shiny reflector.' },
  { id: 'storm', name: 'Oceanus Procellarum', short: 'Apollo 12', lat: -3.01, lon: -23.42, summary: 'A careful landing near Surveyor 3 turned one mission into a robot archaeology visit.', clue: 'Look for the place where astronauts inspected a machine that arrived first.' },
  { id: 'fra-mauro', name: 'Fra Mauro', short: 'Apollo 14', lat: -3.65, lon: -17.47, summary: 'Antares landed near an ancient crater field, where a small cart helped carry samples.', clue: 'Look for a hand-pulled science helper and a long-distance reflector.' },
  { id: 'hadley', name: 'Hadley–Apennine', short: 'Apollo 15', lat: 26.13, lon: 3.63, summary: 'Falcon and the first lunar rover explored mountains, a canyon and the Moon’s deeper story.', clue: 'Look for a rover, a heat-flow experiment and a package of patient listeners.' },
  { id: 'descartes', name: 'Descartes Highlands', short: 'Apollo 16', lat: -9.00, lon: 15.50, summary: 'Orion and its crew explored bright highlands with a rover and an ambitious science station.', clue: 'Look for records made to compare rocks, rays and underground warmth.' },
  { id: 'taurus', name: 'Taurus–Littrow', short: 'Apollo 17', lat: 20.19, lon: 30.77, summary: 'Challenger landed beside a valley full of clues about the Moon’s volcanic past.', clue: 'Look for the final Apollo rover, a neutron probe and a last set of reflectors.' },
  { id: 'flamsteed', name: 'Flamsteed crater', short: 'Surveyor 1', lat: -2.45, lon: -43.22, summary: 'Surveyor 1 proved that a soft landing was possible before astronauts tried it.', clue: 'Look for the first robotic scout in this explorer map.' },
  { id: 'sinus-medii', name: 'Sinus Medii', short: 'Surveyor 5 / 6', lat: 1.41, lon: 23.18, summary: 'Two Surveyor scouts tested lunar soil and photographed a wide, quiet horizon.', clue: 'Look for records that helped engineers trust the ground.' },
  { id: 'tycho', name: 'Tycho crater', short: 'Surveyor 7', lat: -40.86, lon: -11.08, summary: 'Surveyor 7 reached the rugged highlands near a bright impact crater.', clue: 'Look for the last Surveyor record and the rockiest landing story.' },
  { id: 'mareserenitatis', name: 'Mare Serenitatis', short: 'Apollo science', lat: 20.00, lon: 30.00, summary: 'A broad lunar sea that helps connect the Apollo 17 instruments to the Moon’s ancient surface.', clue: 'Try the science filter to see what this place helped us measure.' }
];

const lunarRecords = [
  { id: 'a11-eagle', title: 'Eagle descent stage', mission: 'Apollo 11', year: '1969', site: 'tranquility', category: 'hardware', type: 'Lunar Module', fact: 'The lower half of Eagle stayed behind as a launch platform after the astronauts lifted off.', surprise: 'A spacecraft can finish its job and become part of a place.' },
  { id: 'a11-easep', title: 'Early Apollo science package', mission: 'Apollo 11', year: '1969', site: 'tranquility', category: 'science', type: 'EASEP', fact: 'The first small package of instruments began measuring the Moon after the astronauts left.', surprise: 'The Moon kept collecting clues after the first visitors went home.' },
  { id: 'a11-lrrr', title: 'Apollo 11 laser reflector', mission: 'Apollo 11', year: '1969', site: 'tranquility', category: 'science', type: 'Retroreflector', fact: 'A panel of mirrors lets scientists bounce lasers from Earth off the Moon to measure its distance.', surprise: 'A silent panel can answer a question from 384,400 kilometres away.' },
  { id: 'a11-camera', title: 'Apollo 11 surface photography', mission: 'Apollo 11', year: '1969', site: 'tranquility', category: 'support', type: 'Mission record', fact: 'Images from Tranquility Base turned a distant landscape into a place people could study together.', surprise: 'A photograph can be a science instrument too.' },
  { id: 'a12-intrepid', title: 'Intrepid descent stage', mission: 'Apollo 12', year: '1969', site: 'storm', category: 'hardware', type: 'Lunar Module', fact: 'Intrepid landed close enough to Surveyor 3 for astronauts to walk over and inspect the older robot.', surprise: 'The second landing became a robot archaeology mission.' },
  { id: 'a12-alsep', title: 'Apollo 12 ALSEP', mission: 'Apollo 12', year: '1969', site: 'storm', category: 'science', type: 'Science station', fact: 'Its instruments listened for moonquakes and studied the Moon’s local environment for years.', surprise: 'Science can continue without a person standing beside the instrument.' },
  { id: 'a12-surveyor-camera', title: 'Surveyor 3 camera', mission: 'Surveyor 3 / Apollo 12', year: '1967–69', site: 'storm', category: 'hardware', type: 'Robotic camera', fact: 'Apollo 12 brought a piece of Surveyor 3 back to Earth so engineers could see how the Moon changed it.', surprise: 'A robot can leave evidence that another mission can collect later.' },
  { id: 'a12-surveyor-scoop', title: 'Surveyor 3 soil scoop', mission: 'Surveyor 3 / Apollo 12', year: '1967–69', site: 'storm', category: 'science', type: 'Soil sampler', fact: 'Surveyor’s scoop tested the lunar surface before crewed missions trusted it.', surprise: 'A small scoop helped answer a very big safety question.' },
  { id: 'a12-tracks', title: 'Apollo 12 traverse record', mission: 'Apollo 12', year: '1969', site: 'storm', category: 'support', type: 'Field record', fact: 'Maps and photographs of the astronauts’ route connect a human walk with the equipment they visited.', surprise: 'Footprints can be data when they show where a team went.' },
  { id: 'a14-antares', title: 'Antares descent stage', mission: 'Apollo 14', year: '1971', site: 'fra-mauro', category: 'hardware', type: 'Lunar Module', fact: 'Antares delivered astronauts to the Fra Mauro highlands and stayed behind after liftoff.', surprise: 'The most important part of a vehicle may be the part that does not come home.' },
  { id: 'a14-alsep', title: 'Apollo 14 ALSEP', mission: 'Apollo 14', year: '1971', site: 'fra-mauro', category: 'science', type: 'Science station', fact: 'The package added more long-running measurements of moonquakes, heat and the lunar environment.', surprise: 'Scientists can compare places by giving them similar instruments.' },
  { id: 'a14-met', title: 'Modular Equipment Transporter', mission: 'Apollo 14', year: '1971', site: 'fra-mauro', category: 'hardware', type: 'Sample cart', fact: 'The two-wheeled MET cart helped astronauts carry tools and samples across the surface.', surprise: 'Even on another world, explorers need a good way to carry things.' },
  { id: 'a14-lrrr', title: 'Apollo 14 laser reflector', mission: 'Apollo 14', year: '1971', site: 'fra-mauro', category: 'science', type: 'Retroreflector', fact: 'Another reflector strengthened a growing network of lunar measuring stations.', surprise: 'One experiment becomes more useful when explorers add more locations.' },
  { id: 'a15-falcon', title: 'Falcon descent stage', mission: 'Apollo 15', year: '1971', site: 'hadley', category: 'hardware', type: 'Lunar Module', fact: 'Falcon became the home base for the first Apollo mission to use a lunar rover.', surprise: 'A landing stage can be both a launch pad and a field laboratory.' },
  { id: 'a15-lrv', title: 'Apollo 15 lunar rover', mission: 'Apollo 15', year: '1971', site: 'hadley', category: 'hardware', type: 'Lunar Roving Vehicle', fact: 'The battery-powered rover carried astronauts much farther than their boots could take them.', surprise: 'More wheels meant more rocks, more routes and more questions.' },
  { id: 'a15-alsep', title: 'Apollo 15 ALSEP', mission: 'Apollo 15', year: '1971', site: 'hadley', category: 'science', type: 'Science station', fact: 'Its instruments included a seismometer and heat-flow experiments for reading the Moon’s interior.', surprise: 'The Moon can reveal what is underground through tiny vibrations and temperature clues.' },
  { id: 'a15-heat', title: 'Heat-flow experiment', mission: 'Apollo 15', year: '1971', site: 'hadley', category: 'science', type: 'Thermal probe', fact: 'Sensors measured how warmth moved up through the lunar ground.', surprise: 'A drill hole can become a window into a world’s inside.' },
  { id: 'a15-lrrr', title: 'Apollo 15 laser reflector', mission: 'Apollo 15', year: '1971', site: 'hadley', category: 'science', type: 'Retroreflector', fact: 'The larger Apollo 15 reflector made lunar distance measurements even more precise.', surprise: 'A quiet experiment can keep improving long after its mission ends.' },
  { id: 'a15-traverse', title: 'Hadley–Apennine traverse', mission: 'Apollo 15', year: '1971', site: 'hadley', category: 'support', type: 'Field record', fact: 'Rover routes, samples and photographs connected a canyon, mountains and volcanic terrain.', surprise: 'A map can be a story about how scientists chose where to look.' },
  { id: 'a16-orion', title: 'Orion descent stage', mission: 'Apollo 16', year: '1972', site: 'descartes', category: 'hardware', type: 'Lunar Module', fact: 'Orion carried the crew into the Descartes Highlands and remained at the site.', surprise: 'A final landing can still be the start of a long science record.' },
  { id: 'a16-lrv', title: 'Apollo 16 lunar rover', mission: 'Apollo 16', year: '1972', site: 'descartes', category: 'hardware', type: 'Lunar Roving Vehicle', fact: 'The rover let astronauts compare bright highland rocks across a much wider area.', surprise: 'Exploration gets stronger when you can compare far-apart clues.' },
  { id: 'a16-alsep', title: 'Apollo 16 ALSEP', mission: 'Apollo 16', year: '1972', site: 'descartes', category: 'science', type: 'Science station', fact: 'The station added measurements of the lunar surface, particles and interior activity.', surprise: 'A package of small instruments can behave like a whole team of scientists.' },
  { id: 'a16-lrrr', title: 'Apollo 16 laser reflector', mission: 'Apollo 16', year: '1972', site: 'descartes', category: 'science', type: 'Retroreflector', fact: 'Its mirrors became another fixed point for measuring the Moon’s orbit and motion.', surprise: 'A location on a map can help measure an entire world.' },
  { id: 'a16-cosmic-ray', title: 'Cosmic-ray detector record', mission: 'Apollo 16', year: '1972', site: 'descartes', category: 'science', type: 'Particle experiment', fact: 'Apollo 16 carried experiments that helped scientists understand energetic particles reaching the lunar surface.', surprise: 'Space weather can be studied even where there is no atmosphere.' },
  { id: 'a16-sample-route', title: 'Descartes sample route', mission: 'Apollo 16', year: '1972', site: 'descartes', category: 'support', type: 'Field record', fact: 'Sample locations and rover tracks help scientists connect a rock to the landscape around it.', surprise: 'The exact place a sample came from is part of the sample’s story.' },
  { id: 'a17-challenger', title: 'Challenger descent stage', mission: 'Apollo 17', year: '1972', site: 'taurus', category: 'hardware', type: 'Lunar Module', fact: 'Challenger was the last crewed lunar lander and became a permanent part of Taurus–Littrow.', surprise: 'The last mission can leave the first clue for the next generation.' },
  { id: 'a17-lrv', title: 'Apollo 17 lunar rover', mission: 'Apollo 17', year: '1972', site: 'taurus', category: 'hardware', type: 'Lunar Roving Vehicle', fact: 'The final Apollo rover carried the crew across a valley with volcanic and ancient rock clues.', surprise: 'A small electric car helped humans become field geologists.' },
  { id: 'a17-alsep', title: 'Apollo 17 ALSEP', mission: 'Apollo 17', year: '1972', site: 'taurus', category: 'science', type: 'Science station', fact: 'The final Apollo station expanded the long-term record of lunar vibrations and particles.', surprise: 'The best data set can begin with many small missions adding their pages.' },
  { id: 'a17-neutron', title: 'Lunar neutron probe', mission: 'Apollo 17', year: '1972', site: 'taurus', category: 'science', type: 'Water-search experiment', fact: 'Neutron measurements helped scientists investigate how hydrogen and possible water were distributed in the soil.', surprise: 'You can search for hidden water without digging it up.' },
  { id: 'a17-lrrr', title: 'Apollo 17 laser reflector', mission: 'Apollo 17', year: '1972', site: 'taurus', category: 'science', type: 'Retroreflector', fact: 'The final Apollo reflector continues the network of mirrors used for lunar laser ranging.', surprise: 'A mission can leave behind a science tool that outlives every astronaut.' },
  { id: 'a17-geology', title: 'Taurus–Littrow geology record', mission: 'Apollo 17', year: '1972', site: 'taurus', category: 'support', type: 'Field record', fact: 'Rover tracks, samples and photographs tell the story of a valley shaped by impacts and ancient lava.', surprise: 'A landscape can be a library if explorers know how to read it.' },
  { id: 'survey-1', title: 'Surveyor 1 soft landing', mission: 'Surveyor 1', year: '1966', site: 'flamsteed', category: 'hardware', type: 'Robotic lander', fact: 'Surveyor 1 made the first successful soft landing by a U.S. spacecraft on the Moon.', surprise: 'Before people can explore a place, robots can test whether the ground is ready.' },
  { id: 'survey-2', title: 'Surveyor 2 landing attempt', mission: 'Surveyor 2', year: '1966', site: 'sinus-medii', category: 'support', type: 'Mission record', fact: 'Surveyor 2 did not complete a soft landing, but its mission record still taught engineers about lunar navigation.', surprise: 'A mission can teach something even when it does not go as planned.' },
  { id: 'survey-3', title: 'Surveyor 3 landing site', mission: 'Surveyor 3', year: '1967', site: 'storm', category: 'hardware', type: 'Robotic lander', fact: 'Surveyor 3 landed near Apollo 12 and became the first extraterrestrial machine visited by astronauts.', surprise: 'Exploration can happen in chapters, with one mission visiting another.' },
  { id: 'survey-4', title: 'Surveyor 4 mission record', mission: 'Surveyor 4', year: '1967', site: 'sinus-medii', category: 'support', type: 'Mission record', fact: 'Surveyor 4’s record helped build the technical story of reaching and working near the Moon.', surprise: 'Scientists keep the lessons from every attempt, not only the perfect ones.' },
  { id: 'survey-5', title: 'Surveyor 5 soil analysis', mission: 'Surveyor 5', year: '1967', site: 'sinus-medii', category: 'science', type: 'Robotic sampler', fact: 'Surveyor 5 photographed the surface and used instruments to study the chemistry of lunar soil.', surprise: 'A robot can turn dust into a clue about how a world formed.' },
  { id: 'survey-6', title: 'Surveyor 6 engine hop', mission: 'Surveyor 6', year: '1967', site: 'sinus-medii', category: 'hardware', type: 'Robotic lander', fact: 'Surveyor 6 briefly lifted and moved to a new spot, showing that a lander could do more than sit still.', surprise: 'A tiny hop can reveal what the ground looks like just a little farther away.' },
  { id: 'survey-7', title: 'Surveyor 7 highlands landing', mission: 'Surveyor 7', year: '1968', site: 'tycho', category: 'hardware', type: 'Robotic lander', fact: 'Surveyor 7 reached the rough highlands near Tycho crater and completed the Surveyor series.', surprise: 'The last scout explored one of the rockiest places on the Moon.' }
];

const lunarSourceById = {
  'survey-1': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1966-045A',
  'survey-2': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1966-084A',
  'survey-3': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
  'survey-4': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-068A',
  'survey-5': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-084A',
  'survey-6': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-112A',
  'survey-7': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1968-001A',
  'a12-surveyor-camera': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
  'a12-surveyor-scoop': 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A'
};

const apolloSourceByMission = {
  'Apollo 11': 'https://www.nasa.gov/mission/apollo-11/',
  'Apollo 12': 'https://www.nasa.gov/mission/apollo-12/',
  'Apollo 14': 'https://www.nasa.gov/mission/apollo-14/',
  'Apollo 15': 'https://www.nasa.gov/mission/apollo-15/',
  'Apollo 16': 'https://www.nasa.gov/mission/apollo-16/',
  'Apollo 17': 'https://www.nasa.gov/mission/apollo-17/'
};

function lunarSource(record) {
  if (lunarSourceById[record.id]) return lunarSourceById[record.id];
  const mission = Object.keys(apolloSourceByMission).find((name) => record.mission.includes(name));
  return apolloSourceByMission[mission] || 'https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html';
}

const state = { filter: 'all', search: '', storyStep: 0, found: new Set(), lastFocused: null, lunarSearch: '', lunarCategory: 'all', lunarSite: null, selectedRecord: null };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderArtifacts() {
  const grid = $('#archiveGrid');
  const query = state.search.trim().toLowerCase();
  const matches = artifacts.filter((artifact) => {
    const filterMatch = state.filter === 'all' || artifact.destination === state.filter;
    const searchMatch = !query || [artifact.name, artifact.destination, artifact.type, artifact.callout, artifact.scope].join(' ').toLowerCase().includes(query);
    return filterMatch && searchMatch;
  });
  $('#emptyState').hidden = matches.length > 0;
  grid.innerHTML = matches.map((artifact) => `
    <button class="artifact-card" data-accent="${artifact.accent}" data-artifact-id="${artifact.id}" type="button" aria-label="Open field note for ${artifact.name}">
      <span class="card-top"><span class="card-destination">${artifact.destination} · ${artifact.era}</span><span class="card-icon" aria-hidden="true"></span></span>
      <span class="card-title">${artifact.name}</span>
      <span class="card-scope">${artifact.scope}</span>
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
  $('#storyNext').innerHTML = state.storyStep === storySteps.length - 1 ? 'Open the lunar map <span aria-hidden="true">↓</span>' : 'Next clue <span aria-hidden="true">→</span>';
  $$('.mission-step').forEach((button) => button.classList.toggle('is-active', Number(button.dataset.step) === state.storyStep));
}

function openArtifact(id) {
  const artifact = artifacts.find((item) => item.id === id);
  if (!artifact) return;
  state.lastFocused = document.activeElement;
  $('#drawerDestination').textContent = artifact.destination.toUpperCase();
  $('#drawerEra').textContent = artifact.era;
  $('#drawerStatus').textContent = artifact.scope.toUpperCase();
  $('#drawerTitle').textContent = artifact.name;
  $('#drawerCallout').textContent = artifact.callout;
  $('#drawerMission').textContent = artifact.mission;
  $('#drawerScience').textContent = artifact.science;
  $('#drawerResting').textContent = artifact.resting;
  $('#drawerQuestion').textContent = artifact.question;
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

function recordLabel(category) {
  return { hardware: 'hardware', science: 'science', support: 'mission record' }[category] || category;
}

function mapPosition(site) {
  const left = Math.max(5, Math.min(95, ((site.lon + 180) / 360) * 100));
  const top = Math.max(8, Math.min(92, ((90 - site.lat) / 180) * 100));
  return { left: `${left}%`, top: `${top}%` };
}

function renderLunarMap() {
  const map = $('#lunarMap');
  map.innerHTML = `
    <div class="map-grid" aria-hidden="true"></div>
    <div class="map-crater crater-one" aria-hidden="true"></div><div class="map-crater crater-two" aria-hidden="true"></div><div class="map-crater crater-three" aria-hidden="true"></div>
    <div class="map-label map-label-north" aria-hidden="true">NORTH</div><div class="map-label map-label-south" aria-hidden="true">SOUTH</div>
    ${lunarSites.map((site) => {
      const position = mapPosition(site);
      const active = state.lunarSite === site.id;
      return `<button class="map-marker ${active ? 'is-active' : ''}" data-site-id="${site.id}" style="left:${position.left};top:${position.top}" type="button" aria-label="Explore ${site.name}, ${site.short}"><span>${site.short.replace('Apollo ', 'A').replace('Surveyor ', 'S')}</span></button>`;
    }).join('')}
  `;
  $$('.map-marker').forEach((marker) => marker.addEventListener('click', () => selectLunarSite(marker.dataset.siteId)));
}

function renderSitePanel() {
  const site = lunarSites.find((item) => item.id === state.lunarSite) || lunarSites[0];
  $('#siteName').textContent = site.name;
  $('#siteMission').textContent = site.short;
  $('#siteSummary').textContent = site.summary;
  $('#siteClue').textContent = site.clue;
  $('#siteRecordCount').textContent = `${lunarRecords.filter((record) => record.site === site.id).length} records here`;
  const record = lunarRecords.find((item) => item.id === state.selectedRecord) || lunarRecords.find((item) => item.site === site.id);
  if (record) renderRecordDetail(record);
}

function renderRecordDetail(record) {
  state.selectedRecord = record.id;
  const site = lunarSites.find((item) => item.id === record.site);
  $('#recordDetail').innerHTML = `<span class="record-detail-kicker">${record.mission} · ${record.year} · ${recordLabel(record.category)}</span><h3>${record.title}</h3><p>${record.fact}</p><div class="record-question"><span>Explorer question</span><strong>${record.surprise}</strong></div><a href="${lunarSource(record)}" target="_blank" rel="noreferrer">Open this NASA record ↗</a>`;
  $('#recordDetail').classList.add('has-record');
  $('#siteName').textContent = site.name;
  $('#siteMission').textContent = site.short;
  $$('.map-marker').forEach((marker) => marker.classList.toggle('is-active', marker.dataset.siteId === record.site));
}

function renderLunarRecords() {
  const query = state.lunarSearch.trim().toLowerCase();
  const matches = lunarRecords.filter((record) => {
    const site = lunarSites.find((item) => item.id === record.site);
    const categoryMatch = state.lunarCategory === 'all' || record.category === state.lunarCategory;
    const siteMatch = !state.lunarSite || record.site === state.lunarSite;
    const searchMatch = !query || [record.title, record.mission, record.year, record.type, record.fact, site?.name].join(' ').toLowerCase().includes(query);
    return categoryMatch && siteMatch && searchMatch;
  });
  $('#lunarRecords').innerHTML = matches.map((record) => {
    const site = lunarSites.find((item) => item.id === record.site);
    return `<article class="lunar-record-card ${state.selectedRecord === record.id ? 'is-selected' : ''}"><button class="lunar-record-select" data-record-id="${record.id}" type="button" aria-pressed="${state.selectedRecord === record.id}"><span class="lunar-record-top"><span>${record.mission} · ${record.year}</span><b>${recordLabel(record.category)}</b></span><strong>${record.title}</strong><span>${record.type} · ${site.name}</span></button><a class="lunar-record-link" href="${lunarSource(record)}" target="_blank" rel="noreferrer">Open NASA source ↗</a></article>`;
  }).join('');
  $('#lunarEmpty').hidden = matches.length > 0;
  $('#lunarCount').textContent = `${matches.length} of ${lunarRecords.length} records`;
}

function selectLunarSite(siteId) {
  state.lunarSite = siteId;
  const siteRecord = lunarRecords.find((record) => record.site === siteId);
  state.selectedRecord = siteRecord?.id || null;
  renderLunarMap();
  renderSitePanel();
  renderLunarRecords();
  $('#sitePanel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function selectLunarRecord(recordId) {
  const record = lunarRecords.find((item) => item.id === recordId);
  if (!record) return;
  state.lunarSite = record.site;
  state.selectedRecord = record.id;
  renderLunarMap();
  renderSitePanel();
  renderLunarRecords();
  window.setTimeout(() => $('#sitePanel').scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
  showToast(`Opened ${record.title}.`);
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
  $$('.lunar-filter-chip').forEach((chip) => chip.addEventListener('click', () => {
    state.lunarCategory = chip.dataset.lunarFilter;
    $$('.lunar-filter-chip').forEach((item) => item.classList.toggle('is-active', item === chip));
    renderLunarRecords();
  }));
  $('#lunarSearch').addEventListener('input', (event) => { state.lunarSearch = event.target.value; renderLunarRecords(); });
  $('#lunarRecords').addEventListener('click', (event) => {
    const card = event.target.closest('.lunar-record-select');
    if (card) selectLunarRecord(card.dataset.recordId);
  });
  $('#clearSite').addEventListener('click', () => { state.lunarSite = null; state.selectedRecord = null; renderLunarMap(); renderSitePanel(); renderLunarRecords(); });
  $$('.mission-step').forEach((button) => button.addEventListener('click', () => { state.storyStep = Number(button.dataset.step); renderStory(); }));
  $('#storyNext').addEventListener('click', () => {
    if (state.storyStep < storySteps.length - 1) { state.storyStep += 1; renderStory(); }
    else document.querySelector('#discoveries').scrollIntoView({ behavior: 'smooth' });
  });
  $('#startMission').addEventListener('click', () => { state.storyStep = 0; renderStory(); document.querySelector('#discoveries').scrollIntoView({ behavior: 'smooth' }); });
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
renderLunarMap();
renderSitePanel();
renderLunarRecords();
bindEvents();
loadCosmicDispatch();
