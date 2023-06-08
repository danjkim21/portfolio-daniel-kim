import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollLock } from "../../hooks/useScrollLock";

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
      className={isActive ? "section__header active" : "section__header"}
    >
      <Link className="container__logo" to="/">
        <i className="header__logo Icon ph-code"></i>
        <span className="header__logoName hover-underline-animation">
          daniel jay-young kim
        </span>
      </Link>

      {pathname === "/" && (
        <>
          <i
            className="hamburgerToggleBtn ph-list"
            onClick={onToggleNavMobile}
          ></i>
          <nav className={isActive ? "nav active" : "nav"}>
            <ul className="navList">
              <li className="navList__items">
                <a
                  href="#about"
                  className="hover-underline-animation"
                  onClick={onNavigate}
                >
                  about
                </a>
              </li>
              <li className="navList__items">
                <a
                  href="#projects"
                  className="hover-underline-animation"
                  onClick={onNavigate}
                >
                  projects
                </a>
              </li>
              <li className="navList__items">
                <a
                  href="#footer"
                  className="hover-underline-animation"
                  onClick={onNavigate}
                >
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
