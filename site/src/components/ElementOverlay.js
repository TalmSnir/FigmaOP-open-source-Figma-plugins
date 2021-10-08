import React from 'react';

export default function ElementOverlay({ overlayRef }) {
  return (
    <div className='element-overlay' ref={overlayRef}>
      <div className='element-overlay__inner'></div>
    </div>
  );
}
