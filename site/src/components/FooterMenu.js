import React from 'react';
import NavLink from './NavLink';

function FooterMenu({ title, items, dataTitle, dataSection, iconName }) {
  return (
    <ul className='footer__menu'>
      <h1 className='footer__menu__title'>{title}</h1>
      {items.map(item => {
        return (
          <NavLink
            href={item[dataSection]}
            target='_blank'
            location='footer'
            iconName={iconName}
            iconSide='right'>
            {item[dataTitle]}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default FooterMenu;
