import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHamburger = styled.img`
	position: absolute;
	top: 26px;
	right: 24px;
	opacity: ${({ $isOpen }) => ($isOpen ? '0.25' : '1')};

	@media screen and (width>=768px) {
		display: none;
	}
`;

const StyledMenu = styled.ul`
	position: absolute;
	top: 70px;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 70px);
	padding-top: 43px;
	background-color: ${COLORS.dark};
	translate: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};
	transition: translate 0.3s;
	z-index: 1;

	@media screen and (width>=768px) {
		position: static;
		flex-direction: row;
		justify-content: space-between;
		padding-top: 0;
		height: min-content;
		translate: 0;
		background-color: transparent;
	}

	@media screen and (width>=1024px) {
		align-items: center;
		gap: 2.0625rem;
		height: 40px;
	}
`;

const StyledMenuItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	width: 80%;
	margin-inline: auto;
	padding-left: 64px;
	height: 66px;
	border-bottom: 1px solid rgb(255 255 255 / 0.1);

	&:last-child {
		border-bottom: none;
	}

	&::after {
		content: '';
		position: absolute;
		top: calc(50% - 12px);
		left: 0;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${({ $color }) => $color};
	}

	@media screen and (width>=768px) {
		padding-left: 0;
		border-bottom: none;
		width: fit-content;
		height: min-content;

		&:after {
			display: none;
		}
	}
`;

const StyledMenuLink = styled(NavLink)`
	opacity: 0.7;
	font-weight: 600;
	letter-spacing: 1px;
	&.active {
		color: ${({ $color }) => $color};
		opacity: 1;
	}
`;

export { StyledHamburger, StyledMenu, StyledMenuItem, StyledMenuLink };
