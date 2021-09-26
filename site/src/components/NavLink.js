import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';
function NavLink({ children, href, target, location, iconName, iconSide }) {
  const className = classNames('nav__link', {
    header__link: location === 'header',
    footer__link: location === 'footer',
    'nav__link__icon--left': iconSide === 'left',
  });
  return (
    <a href={href} target={target} className={className}>
      {children}
      {iconName && <Icon name={iconName} />}
    </a>
  );
}

export default NavLink;
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  location: PropTypes.oneOf(['footer', 'header']),
  iconName: PropTypes.string,
  iconSide: PropTypes.string,
};
