import React, { useState } from 'react';
import GifModal from './GifModal';
import Button from './Button';
function CardFooter({ pluginGif }) {
  const [showModal, setShowModal] = useState(false);
  const handleWatchDemo = () => {
    setShowModal(!showModal);
  };
  return (
    <div className='plugin-card__footer'>
      {showModal && (
        <GifModal pluginGif={pluginGif} onClick={handleWatchDemo} />
      )}
      <Button type='text' onClick={handleWatchDemo}>
        watch demo
      </Button>
    </div>
  );
}

export default CardFooter;
