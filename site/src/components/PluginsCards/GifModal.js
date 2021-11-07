import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Buttons/Button';
import PropTypes from 'prop-types';

function GifModal({ gif, onClick }) {
  return ReactDom.createPortal(
    <>
      <div className='gif-modal__overlay' onClick={onClick}></div>
      <div className='gif-modal'>
        <div className='gif-modal__header'>
          <Button type='icon' iconName='close' onClick={onClick} />
        </div>
        <img src={gif} alt='gif example of a plugin' />
      </div>
    </>,
    document.getElementById('modal-portal')
  );
}

export default GifModal;

GifModal.propTypes = {
  gif: PropTypes.elementType,
  onClick: PropTypes.func,
};
