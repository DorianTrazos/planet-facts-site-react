import { TABS } from '../../constants/tabs';
import { StyledTab, StyledTabs } from './tabs.styles';

const Tabs = ({ activeTab, setActiveTab, activeColor }) => {
	return (
		<div>
			<StyledTabs>
				{TABS.map((tab, index) => (
					<StyledTab
						key={tab}
						$activeTab={activeTab}
						$currentTab={index}
						$activeColor={activeColor}
						onClick={() => setActiveTab(index)}
					>
						{tab}
					</StyledTab>
				))}
			</StyledTabs>
		</div>
	);
};

export default Tabs;
