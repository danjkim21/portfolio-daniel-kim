import { navigationInterface } from '../../../types/appInterfaces';

const navigation: navigationInterface[] = [
	{ key: 1, name: 'about', href: '#about' },
	{ key: 2, name: 'projects', href: '#projects' },
	{ key: 3, name: 'contact', href: '#footer' },
];

interface NavigationProps {
	isActive: boolean;
	onNavigate: () => void;
}

function Navigation({ isActive, onNavigate }: NavigationProps) {
	return (
		<nav className={isActive ? 'nav active' : 'nav'} aria-hidden={!isActive}>
			<ul className="navList">
				{navigation.map((item) => {
					return (
						<li key={item.key} className="navList__items">
							<a
								href={item.href}
								aria-label="Navigate to About Me Section"
								className="hover-underline-animation"
								onClick={onNavigate}
							>
								{item.name}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navigation;
