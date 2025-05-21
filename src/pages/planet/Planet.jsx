import { useState } from 'react';
import Header from '../../components/header/Header';
import Tabs from '../../components/tabs/Tabs';
import { PLANETS_INFO } from '../../constants/planets-info';
import {
	StyledPlanetFooter,
	StyledPlanetFooterItem,
	StyledPlanetGeologyImage,
	StyledPlanetInfo,
	StyledPlanetLink,
	StyledPlanetMain,
	StyledPlanetMainImage,
	StyledPlanetMainImageContainer
} from './planet.styles';
import { TABS_INFO } from '../../constants/tabs';

const Planet = ({ planetName }) => {
	const [activeTab, setActiveTab] = useState(TABS_INFO.STRUCTURE);
	const planetInfo = PLANETS_INFO[planetName];
	return (
		<>
			<Header />
			<StyledPlanetMain>
				<Tabs
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					activeColor={planetInfo.activeColor}
				/>

				<StyledPlanetInfo>
					<StyledPlanetMainImageContainer>
						{activeTab !== TABS_INFO.SURFACE && (
							<StyledPlanetMainImage
								src={planetInfo.images[activeTab]}
								alt=''
								$planetWith={planetInfo.planetWidth}
							/>
						)}
						{activeTab === TABS_INFO.SURFACE && (
							<>
								<StyledPlanetMainImage
									src={planetInfo.images[activeTab].main}
									alt=''
									$planetWith={planetInfo.planetWidth}
								/>
								<StyledPlanetGeologyImage
									src={planetInfo.images[activeTab].geology}
									alt=''
								/>
							</>
						)}
					</StyledPlanetMainImageContainer>

					<h2>{planetName.toUpperCase()}</h2>
					<p>{planetInfo.texts[activeTab]}</p>
					<StyledPlanetLink>
						Source:{' '}
						<a target='_blank' href={planetInfo.link}>
							Wikipedia
						</a>
						<img src='/assets/icon-source.svg' alt='' />
					</StyledPlanetLink>
				</StyledPlanetInfo>

				<StyledPlanetFooter>
					<StyledPlanetFooterItem>
						<span>ROTATION TIME</span>
						<span>{planetInfo.rotationTime}</span>
					</StyledPlanetFooterItem>
					<StyledPlanetFooterItem>
						<span>REVOLUTION TIME</span>
						<span>{planetInfo.revolutionTime}</span>
					</StyledPlanetFooterItem>
					<StyledPlanetFooterItem>
						<span>RADIUS</span>
						<span>{planetInfo.radius}</span>
					</StyledPlanetFooterItem>
					<StyledPlanetFooterItem>
						<span>AVERAGE TEMP.</span>
						<span>{planetInfo.averageTemp}</span>
					</StyledPlanetFooterItem>
				</StyledPlanetFooter>
			</StyledPlanetMain>
		</>
	);
};

export default Planet;
