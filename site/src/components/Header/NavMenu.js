import React from 'react';
import NavLink from '../NavLink';
import classNames from 'classnames';
function NavMenu({ show }) {
  const className = classNames('header__nav', {
    show: show,
  });
  return (
    <nav className={className}>
      <ul className='header__nav__menu'>
        <li className='header__nav__item'>
          <NavLink href='#plugins' location='header' type='link'>
            plugins
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink href='#return' location='header' type='link'>
            about & contribution
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink href='#new-idea' location='header' type='link'>
            have an idea?
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink href='#footer' location='header' type='link'>
            contact & support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
