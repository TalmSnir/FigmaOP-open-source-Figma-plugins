import React from 'react';
import NavLink from './NavLink';
function SocialsMenu() {
  return (
    <div className='footer__social-menu'>
      <NavLink href='dribbble' target='_blank' iconName='dribbble' />
      <NavLink href='linkedin' target='_blank' iconName='linkedin' />
      <NavLink href='github' target='_blank' iconName='github' />
    </div>
  );
}

export default SocialsMenu;
