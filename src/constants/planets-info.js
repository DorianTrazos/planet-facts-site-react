import { COLORS } from '../styles/colors';

const MERCURY = {
	images: {
		0: '/assets/planet-mercury.svg',
		1: '/assets/planet-mercury-internal.svg',
		2: {
			main: '/assets/planet-mercury.svg',
			geology: '/assets/geology-mercury.png'
		}
	},
	texts: {
		0: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
		1: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3, only slightly less than Earth's density.",
		2: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
	},
	link: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
	rotationTime: '58.6 DAYS',
	revolutionTime: '87.97 DAYS',
	radius: '2,439.7 KM',
	averageTemp: '430 ºC',
	activeColor: COLORS.mercury,
	planetWidth: '111px'
};

const VENUS = {
	images: {
		0: '/assets/planet-venus.svg',
		1: '/assets/planet-venus-internal.svg',
		2: {
			main: '/assets/planet-venus.svg',
			geology: '/assets/geology-venus.png'
		}
	},
	texts: {
		0: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
		1: 'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
		2: 'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.'
	},
	link: 'https://en.wikipedia.org/wiki/Venus',
	rotationTime: '243 DAYS',
	revolutionTime: '224.7 DAYS',
	radius: '6,051.8 KM',
	averageTemp: '471 ºC',
	activeColor: COLORS.venus,
	planetWidth: '253px'
};

const EARTH = {
	images: {
		0: '/assets/planet-earth.svg',
		1: '/assets/planet-earth-internal.svg',
		2: {
			main: '/assets/planet-earth.svg',
			geology: '/assets/geology-earth.png'
		}
	},
	texts: {
		0: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
		1: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
		2: 'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.'
	},
	link: 'https://en.wikipedia.org/wiki/earth',
	rotationTime: '0.99 DAYS',
	revolutionTime: '365.26 DAYS',
	radius: '6,371 KM',
	averageTemp: '16 ºC',
	activeColor: COLORS.earth,
	planetWidth: '173px'
};

const MARS = {
	images: {
		0: '/assets/planet-mars.svg',
		1: '/assets/planet-mars-internal.svg',
		2: {
			main: '/assets/planet-mars.svg',
			geology: '/assets/geology-mars.png'
		}
	},
	texts: {
		0: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet"',
		1: 'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
		2: 'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.'
	},
	link: 'https://en.wikipedia.org/wiki/mars',
	rotationTime: '1.03 DAYS',
	revolutionTime: '1.88 YEARS',
	radius: '3,389.5 KM',
	averageTemp: '-28 ºC',
	activeColor: COLORS.mars,
	planetWidth: '129px'
};

const JUPITER = {
	images: {
		0: '/assets/planet-jupiter.svg',
		1: '/assets/planet-jupiter-internal.svg',
		2: {
			main: '/assets/planet-jupiter.svg',
			geology: '/assets/geology-jupiter.png'
		}
	},
	texts: {
		0: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
		1: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
		2: 'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.'
	},
	link: 'https://en.wikipedia.org/wiki/jupiter',
	rotationTime: '9.93 HOURS',
	revolutionTime: '11.86 YEARS',
	radius: '69,911 KM',
	averageTemp: '-108 ºC',
	activeColor: COLORS.jupiter,
	planetWidth: '224px'
};

const SATURN = {
	images: {
		0: '/assets/planet-saturn.svg',
		1: '/assets/planet-saturn-internal.svg',
		2: {
			main: '/assets/planet-saturn.svg',
			geology: '/assets/geology-saturn.png'
		}
	},
	texts: {
		0: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
		1: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
		2: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."
	},
	link: 'https://en.wikipedia.org/wiki/saturn',
	rotationTime: '10.8 HOURS',
	revolutionTime: '29.46 YEARS',
	radius: '58,232 KM',
	averageTemp: '-138 ºC',
	activeColor: COLORS.saturn,
	planetWidth: '256px'
};

const URANUS = {
	images: {
		0: '/assets/planet-uranus.svg',
		1: '/assets/planet-uranus-internal.svg',
		2: {
			main: '/assets/planet-uranus.svg',
			geology: '/assets/geology-uranus.png'
		}
	},
	texts: {
		0: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
		1: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
		2: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
	},
	link: 'https://en.wikipedia.org/wiki/uranus',
	rotationTime: '17.2 HOURS',
	revolutionTime: '84 YEARS',
	radius: '25,362 KM',
	averageTemp: '-195 ºC',
	activeColor: COLORS.uranus,
	planetWidth: '176px'
};

const NEPTUNE = {
	images: {
		0: '/assets/planet-neptune.svg',
		1: '/assets/planet-neptune-internal.svg',
		2: {
			main: '/assets/planet-neptune.svg',
			geology: '/assets/geology-neptune.png'
		}
	},
	texts: {
		0: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
		1: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
		2: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
	},
	link: 'https://en.wikipedia.org/wiki/neptune',
	rotationTime: '16.08 HOURS',
	revolutionTime: '164.79 YEARS',
	radius: '24,622 KM',
	averageTemp: '-201 ºC',
	activeColor: COLORS.neptune,
	planetWidth: '173px'
};

export const PLANETS_INFO = {
	mercury: MERCURY,
	venus: VENUS,
	earth: EARTH,
	mars: MARS,
	jupiter: JUPITER,
	saturn: SATURN,
	uranus: URANUS,
	neptune: NEPTUNE
};
