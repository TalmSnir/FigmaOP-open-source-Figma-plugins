import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icons/Icon';
function NavLink({
  children,
  href,
  target,
  location,
  iconName,
  iconSide,
  type,
  btnVariant,
  onClick,
  disabled,
  linkRef,
}) {
  const className = classNames({
    disabled: disabled,
    nav__link: type === 'link',
    btn: type === 'button',
    'btn--primary': btnVariant === 'primary',
    'btn--secondary': btnVariant === 'secondary',
    header__link: location === 'header',
    footer__link: location === 'footer',
    'nav__link__icon--left': iconSide === 'left',
  });
  return (
    <a
      ref={linkRef}
      href={href}
      target={target}
      className={className}
      rel={location === 'footer' ? 'noopener' : null}
      onClick={onClick}>
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