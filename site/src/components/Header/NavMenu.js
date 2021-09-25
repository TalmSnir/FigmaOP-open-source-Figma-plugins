import React from 'react';
import NavLink from '../NavLink';
function NavMenu({ largeScreenMenu }) {
  return (
    <nav className={`header__nav' ${largeScreenMenu && 'large-screen'}`}>
      <ul className='header__nav__menu'>
        <li className='header__nav__item'>
          <NavLink href='black' location='header'>
            about
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink href='black' location='header'>
            plugins
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink href='black' location='header'>
            contribute
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink href='black' location='header'>
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
