import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
function ButtonsGroup({ children, direction }) {
  const className = classNames('btns-group', {
    'btns-group--col': direction === 'column',
  });
  return <div className={className}>{children}</div>;
}

export default ButtonsGroup;
ButtonsGroup.propTypes = {
  children: PropTypes.elementType,
  direction: PropTypes.string,
};
