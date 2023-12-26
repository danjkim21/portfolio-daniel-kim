import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollLock } from '../../hooks/useScrollLock';
import { navigationInterface } from '../../types/appInterfaces';

const navigation: navigationInterface[] = [
	{ key: 1, name: 'about', href: '#about' },
	{ key: 2, name: 'projects', href: '#projects' },
	{ key: 3, name: 'contact', href: '#footer' },
];

function Header() {
	const { pathname } = useLocation();
	const [isActive, setIsActive] = useState(false);
	const { lockScroll, unlockScroll } = useScrollLock();

	const onToggleNavMobile = () => {
		if (isActive) {
			unlockScroll();
		}
		if (!isActive) {
			lockScroll();
		}
		setIsActive((isActiveDefault) => !isActiveDefault);
	};

	const onNavigate = () => {
		unlockScroll();
		setIsActive(false);
	};

	return (
		<header
			id="header"
			className={isActive ? 'section__header active' : 'section__header'}
		>
			<Link
				className="container__logo"
				aria-label="Navigate to Portfolio landing page"
				to="/"
			>
				<i className="header__logo Icon ph-code" />
				<span className="header__logoName hover-underline-animation">
					daniel jay-young kim
				</span>
			</Link>

			{pathname === '/' && (
				<>
					<i
						className="hamburgerToggleBtn ph-list"
						onClick={onToggleNavMobile}
					/>
					<nav
						className={isActive ? 'nav active' : 'nav'}
						aria-hidden={!isActive}
					>
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
				</>
			)}
		</header>
	);
}

export default Header;
