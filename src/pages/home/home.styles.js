import styled from 'styled-components';

const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: calc(100vh - 70px);
	padding-inline: 1.5rem;

	@media screen and (width>=768px) {
		padding-inline: 3.3125rem;
		height: calc(100vh - 166px);
	}

	@media screen and (width>=1024px) {
		padding-inline: 8.125rem;
		height: calc(100vh - 166px);
	}
`;

export { StyledHome };
