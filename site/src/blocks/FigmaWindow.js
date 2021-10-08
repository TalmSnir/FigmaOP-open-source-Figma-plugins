import React from 'react';
export default function FigmaWindow({
  children,
  figmaWindowRef,
  onClick,
  onMouseMove,
  containerRef,
}) {
  return (
    <div
      className='figma-window '
      ref={figmaWindowRef}
      onClick={onClick}
      onMouseMove={onMouseMove}>
      <div className='figma-window__top'></div>
      <div className='figma-window__right'></div>
      <div className='figma-window__left'></div>
      <div className='container' ref={containerRef} onClick={onClick}>
        {children}
      </div>
    </div>
  );
}
