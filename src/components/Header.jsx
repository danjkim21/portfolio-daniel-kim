import '../App.css';
import { useRef } from 'react';
import backgroundImg from '../assets/gradient-background.svg';

function Header(props) {
  const navEl = useRef();
  const headerEl = useRef();
  let toggleNavMobile = async () => {
    // console.log(navEl.current, headerEl.current);
    navEl.current.classList.toggle('active');
    headerEl.current.classList.toggle('active');
  };

  return (
    <header
      id="header"
      className="section__header"
      ref={headerEl}
    >
      <a
        className="container__logo"
        href="#header"
      >
        <i className="header__logo Icon ph-code"></i>
        <span className="header__logoName hover-underline-animation">
          daniel jay-young kim
        </span>
      </a>
      <i
        className="hamburgerToggleBtn ph-list"
        onClick={toggleNavMobile}
      ></i>
      <nav
        className="nav"
        ref={navEl}
      >
        <ul className="navList">
          <li className="navList__items">
            <a
              href="#about"
              className="hover-underline-animation"
            >
              about
            </a>
          </li>
          <li className="navList__items">
            <a
              href="#projects"
              className="hover-underline-animation"
            >
              projects
            </a>
          </li>
          <li className="navList__items">
            <a
              href="#footer"
              className="hover-underline-animation"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
