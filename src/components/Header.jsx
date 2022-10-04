import '../App.css';
import backgroundImg from '../assets/gradient-background.svg';

function Header(props) {
  return (
    <header
      id="header"
      className="section__header"
    >
      <a
        className="container__logo"
        href="#header"
      >
        <i className="header__logo Icon ph-code"></i>
        <span className="header__logoName">daniel jay-young kim</span>
      </a>
      <i className="hamburgerToggleBtn ph-list"></i>
      <nav className="nav">
        <ul className="navList">
          <li className="navList__items">
            <a href="#about">about</a>
          </li>
          <li className="navList__items">
            <a href="#projects">projects</a>
          </li>
          <li className="navList__items">
            <a href="#footer">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
