import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImg from '../assets/images/gradient-background.svg';

function Header(props) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);

  let toggleNavMobile = () => {
    setIsActive((isActiveDefault) => !isActive);
  };

  return (
    <header
      id='header'
      className={isActive ? 'section__header active' : 'section__header'}
    >
      <Link className='container__logo' to='/'>
        <i className='header__logo Icon ph-code'></i>
        <span className='header__logoName hover-underline-animation'>
          daniel jay-young kim
        </span>
      </Link>

      {pathname === '/' && (
        <>
          <i
            className='hamburgerToggleBtn ph-list'
            onClick={toggleNavMobile}
          ></i>
          <nav className={isActive ? 'nav active' : 'nav'}>
            <ul className='navList'>
              <li className='navList__items'>
                <a href='#about' className='hover-underline-animation'>
                  about
                </a>
              </li>
              <li className='navList__items'>
                <a href='#projects' className='hover-underline-animation'>
                  projects
                </a>
              </li>
              <li className='navList__items'>
                <a href='#footer' className='hover-underline-animation'>
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
