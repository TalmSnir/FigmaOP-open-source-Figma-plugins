import React from 'react';
import NavLink from '../Navigation/NavLink';
import classNames from 'classnames';
import PropTypes from 'prop-types';
function NavMenu({ show, setShowMenu }) {
  const className = classNames('header__nav', {
    show: show,
  });

  return (
    <nav className={className}>
      <ul className='header__nav__menu'>
        <li className='header__nav__item'>
          <NavLink
            href='#plugins'
            location='header'
            type='link'
            onClick={() => setShowMenu(false)}>
            plugins
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink
            href='#return'
            location='header'
            type='link'
            onClick={() => setShowMenu(false)}>
            about & contribution
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink
            href='#new-idea'
            location='header'
            type='link'
            onClick={() => setShowMenu(false)}>
            have an idea ?
          </NavLink>
        </li>
        <li className='header__nav__item'>
          <NavLink
            href='#footer'
            location='header'
            type='link'
            onClick={() => setShowMenu(false)}>
            contact & support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
NavMenu.propTypes = {
  show: PropTypes.bool,
  setShowMenu: PropTypes.func,
};
