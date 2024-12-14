import Header from '../../components/header/Header';
import { StyledHome } from './home.styles';

const Home = () => {
	return (
		<>
			<Header />
			<StyledHome>
				<img src='/assets/solar.sistem.svg' alt='Solar sistem image' />
			</StyledHome>
		</>
	);
};

export default Home;
