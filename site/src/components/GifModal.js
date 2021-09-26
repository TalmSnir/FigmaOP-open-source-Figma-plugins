import React from 'react';
import Button from './Button';

function GifModal({ gifSrc }) {
  return (
    <div className='gif-modal'>
      <Button iconName='close' />
      <img src={gifSrc} alt='gif example of a plugin' />
    </div>
  );
}

export default GifModal;
