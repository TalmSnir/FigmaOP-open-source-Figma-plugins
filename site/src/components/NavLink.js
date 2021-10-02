import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';
function NavLink({
  children,
  href,
  target,
  location,
  iconName,
  iconSide,
  type,
  btnVariant,
}) {
  const className = classNames({
    nav__link: type === 'link',
    btn: type === 'button',
    'btn--primary': btnVariant === 'primary',
    'btn--secondary': btnVariant === 'secondary',
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
  type: PropTypes.oneOf(['button', 'link']),
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  location: PropTypes.oneOf(['footer', 'header']),
  iconName: PropTypes.string,
  iconSide: PropTypes.string,
};
