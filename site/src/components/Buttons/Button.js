import React from 'react';
import Icon from '../Icons/Icon';

import classNames from 'classnames';
import PropTypes from 'prop-types';
function Button({
  onClick,
  children,
  iconName,
  iconSide,
  type,
  iconClasses,
  disabled,
  ariaLabel,
}) {
  const className = classNames('btn', {
    'btn--plugin': type === 'plugin',
    'btn--primary': type === 'primary',
    'btn--secondary': type === 'secondary',
    'btn__icon--right': iconSide === 'right',
  });

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}>
      {iconName && <Icon name={iconName} className={iconClasses} />}
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  iconName: PropTypes.string,
  iconSide: PropTypes.string,
  ariaLabel: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'icon', 'plugin', 'text'])
    .isRequired,
};
