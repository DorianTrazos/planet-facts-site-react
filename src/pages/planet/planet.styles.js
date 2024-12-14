import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledPlanetMain = styled.main`
	padding: 0 24px 47px;
`;

const StyledPlanetInfo = styled.div`
	text-align: center;
`;

const StyledPlanetMainImageContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 309px;
`;

const StyledPlanetMainImage = styled.img`
	width: ${({ $planetWith }) => $planetWith};
	margin-inline: auto;
`;

const StyledPlanetGeologyImage = styled.img`
	position: absolute;
	bottom: 30px;
	width: 90px;
`;

const StyledPlanetLink = styled.span`
	display: flex;
	justify-content: center;
	gap: 0.25rem;
	align-items: center;
	margin-bottom: 28px;
`;

const StyledPlanetFooter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const StyledPlanetFooterItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 48px;
	padding-inline: 24px;
	border: 1px solid ${COLORS.transparentWhite};
`;

export {
	StyledPlanetFooter,
	StyledPlanetFooterItem,
	StyledPlanetGeologyImage,
	StyledPlanetInfo,
	StyledPlanetLink,
	StyledPlanetMain,
	StyledPlanetMainImage,
	StyledPlanetMainImageContainer
};
