import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo-icon.svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';
function Logo({ size, theme }) {
  const className = classNames('logo', {
    'logo__icon--lg': size === 'lg',
    'logo__icon--light': theme === 'light',
  });
  return (
    <div className={className}>
      <LogoIcon />
      FigmaOP
    </div>
  );
}

export default Logo;
Logo.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
};
