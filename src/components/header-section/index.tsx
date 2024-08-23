import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollLock } from '../../hooks/useScrollLock';
import Navigation from './components/Navigation';

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
          <Navigation isActive={isActive} onNavigate={onNavigate} />
        </>
      )}
    </header>
  );
}

export default Header;
