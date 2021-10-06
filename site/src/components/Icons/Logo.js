import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/logo-icon.svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';
function Logo({ theme }) {
  const className = classNames('logo', {
    'logo__text--light': theme === 'light',
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
  theme: PropTypes.oneOf(['light']),
};
