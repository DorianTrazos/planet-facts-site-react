import { useState } from 'react';
import { MENU_INFO } from '../../constants/menu-info';
import {
	StyledHamburger,
	StyledMenu,
	StyledMenuItem,
	StyledMenuLink
} from './menu.styles';

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<StyledHamburger
				src='/assets/icon-hamburger.svg'
				alt=''
				$isOpen={isOpen}
				onClick={() => setIsOpen(!isOpen)}
			/>
			<nav>
				<StyledMenu $isOpen={isOpen}>
					{MENU_INFO.map(menu => (
						<StyledMenuItem key={menu.id} $color={menu.color}>
							<StyledMenuLink
								to={menu.link}
								$color={menu.color}
								onClick={() => setIsOpen(false)}
							>
								{menu.text}
							</StyledMenuLink>
						</StyledMenuItem>
					))}
				</StyledMenu>
			</nav>
		</>
	);
};

export default Menu;
