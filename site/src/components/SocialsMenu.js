import React from 'react';
import NavLink from './NavLink';
function SocialsMenu() {
  return (
    <div className='footer__social-menu'>
      <NavLink
        href='https://dribbble.com/TalmSnir'
        target='_blank'
        iconName='dribbble'
      />
      <NavLink
        href='https://www.linkedin.com/in/talmsnir/'
        target='_blank'
        iconName='linkedin'
      />
      <NavLink
        href='https://github.com/TalmSnir'
        target='_blank'
        iconName='github'
      />
    </div>
  );
}

export default SocialsMenu;
