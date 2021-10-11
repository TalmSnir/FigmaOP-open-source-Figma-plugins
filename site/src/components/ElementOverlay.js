import React from 'react';

export default function ElementOverlay({ overlayRef, elementClicked }) {
  return (
    <div
      className={`element-overlay ${elementClicked ? 'show' : ''}`}
      ref={overlayRef}>
      <div className='element-overlay__inner'></div>
    </div>
  );
}
