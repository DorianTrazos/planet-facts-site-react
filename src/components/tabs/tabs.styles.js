import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledTabs = styled.ul`
	display: flex;
	justify-content: space-between;
	padding: 20px 24px 0;
	border-bottom: 1px solid ${COLORS.transparentWhite};
`;
const StyledTab = styled.li`
	padding-bottom: 20px;
	border-bottom: 4px solid
		${({ $activeTab, $currentTab, $activeColor }) =>
			$activeTab === $currentTab ? $activeColor : 'transparent'};
	cursor: pointer;
`;

export { StyledTab, StyledTabs };
