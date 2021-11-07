import React from 'react';
import PropTypes from 'prop-types';
function Container({ children }) {
  return <div className='container'>{children}</div>;
}

export default Container;
Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};
