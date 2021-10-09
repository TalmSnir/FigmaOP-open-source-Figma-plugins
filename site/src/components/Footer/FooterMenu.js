import React from 'react';
import NavLink from '../Navigation/NavLink';

function FooterMenu({ title, items, dataTitle, dataSection, iconName }) {
  return (
    <ul className='footer__menu'>
      <h1 className='footer__menu__title'>{title}</h1>
      {items.map(item => {
        return (
          <NavLink
            key={item[dataTitle]}
            type='link'
            href={item[dataSection]}
            target='_blank'
            location='footer'
            iconName={iconName}
            iconSide='right'>
            {`${item[dataTitle]} ${
              item[dataSection] === '#' ? '-Coming Soon' : ''
            }`}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default FooterMenu;
