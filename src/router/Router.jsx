import { Route, Routes } from 'react-router-dom';
import { MENU_INFO } from '../constants/menu-info';
import Home from '../pages/home/Home';
import Planet from '../pages/planet/Planet';

const Router = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			{MENU_INFO.map(planet => {
				const formatPlanet = planet.text.toLowerCase();
				return (
					<Route
						key={planet.id}
						path={planet.link}
						element={<Planet planetName={formatPlanet} />}
					/>
				);
			})}
		</Routes>
	);
};

export default Router;
