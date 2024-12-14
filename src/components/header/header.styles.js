import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	width: 100%;
	border-bottom: 1px solid ${COLORS.transparentWhite};

	@media screen and (width>=768px) {
		flex-direction: column;
		gap: 39px;
		padding: 2rem 3.1875rem;
		text-align: center;
	}

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: center;
		padding: 2rem 3.1875rem;
	}
`;

export { StyledHeader };
