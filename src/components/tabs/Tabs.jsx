import { StyledTab, StyledTabs } from './tabs.styles';

const Tabs = ({ activeTab, setActiveTab, activeColor }) => {
	return (
		<div>
			<StyledTabs>
				<StyledTab
					$activeTab={activeTab}
					$currentTab={0}
					$activeColor={activeColor}
					onClick={() => setActiveTab(0)}
				>
					OVERVIEW
				</StyledTab>
				<StyledTab
					$activeTab={activeTab}
					$currentTab={1}
					$activeColor={activeColor}
					onClick={() => setActiveTab(1)}
				>
					STRUCTURE
				</StyledTab>
				<StyledTab
					$activeTab={activeTab}
					$currentTab={2}
					$activeColor={activeColor}
					onClick={() => setActiveTab(2)}
				>
					SURFACE
				</StyledTab>
			</StyledTabs>
		</div>
	);
};

export default Tabs;
