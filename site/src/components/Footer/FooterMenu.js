import React from 'react';
import NavLink from '../Navigation/NavLink';
import PropTypes from 'prop-types';

function FooterMenu({ title, items, dataTitle, dataSection, iconName }) {
  return (
    <div className='footer__menu'>
      <h1 className='footer__menu__title'>{title}</h1>
      <ul className='footer__menu__list'>
        {items.map(item => {
          return (
            item[dataSection] !== '#' && (
              <li>
                <NavLink
                  key={item[dataTitle]}
                  type='link'
                  href={item[dataSection]}
                  target='_blank'
                  location='footer'
                  iconName={iconName}
                  iconSide='right'>
                  {item[dataTitle]}
                </NavLink>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

export default FooterMenu;

FooterMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  dataTitle: PropTypes.string,
  dataSection: PropTypes.string,
  iconName: PropTypes.string,
};
