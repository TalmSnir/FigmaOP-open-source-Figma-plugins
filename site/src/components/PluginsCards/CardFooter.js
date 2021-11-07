import React, { useState } from 'react';
import GifModal from './GifModal';
import Button from '../Buttons/Button';
import PropTypes from 'prop-types';

function CardFooter({ gif, disabled }) {
  const [showModal, setShowModal] = useState(false);
  const handleWatchDemo = () => {
    setShowModal(!showModal);
  };
  return (
    <div className='plugin-card__footer'>
      {showModal && <GifModal gif={gif} onClick={handleWatchDemo} />}
      <Button type='text' onClick={handleWatchDemo} disabled={disabled}>
        watch demo
      </Button>
    </div>
  );
}

export default CardFooter;
CardFooter.propTypes = {
  gif: PropTypes.elementType,
  disabled: PropTypes.bool,
};
