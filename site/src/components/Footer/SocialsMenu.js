import React from 'react';
import NavLink from '../Navigation/NavLink';
function SocialsMenu() {
  return (
    <div className='footer__social-menu'>
      <NavLink
        type='link'
        href='https://dribbble.com/TalmSnir'
        target='_blank'
        iconName='dribbble'
        ariaLabel='dribbble'
      />
      <NavLink
        type='link'
        href='https://www.linkedin.com/in/talmsnir/'
        target='_blank'
        iconName='linkedin'
        ariaLabel='linkedin'
      />
      <NavLink
        type='link'
        href='https://github.com/TalmSnir'
        target='_blank'
        iconName='github'
        ariaLabel='github'
      />
    </div>
  );
}

export default SocialsMenu;
