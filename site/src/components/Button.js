import React from 'react';
import Icon from './Icon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
function Button({ onClick, children, iconName, iconSide, type, iconClasses }) {
  const className = classNames('btn', {
    'btn--primary': type === 'primary',
    'btn--secondary': type === 'secondary',
    'btn__icon--right': iconSide === 'right',
  });

  return (
    <button className={className} onClick={onClick}>
      {iconName && <Icon name={iconName} className={iconClasses} />}
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any,
  iconName: PropTypes.string,
  iconSide: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'icon', 'text']).isRequired,
};
