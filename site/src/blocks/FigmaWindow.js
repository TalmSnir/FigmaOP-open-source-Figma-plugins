import React from 'react';
import PropTypes from 'prop-types';
import LeftPanel from '../assets/Left Sidebar Panel.svg';
import RightPanel from '../assets/Right Sidebar Panel.svg';
import TopBar from '../assets/Toolbar.svg';

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
      <div className='figma-window__top'>
        <img src={TopBar} alt='left panel figma window' />
      </div>
      <div className='figma-window__right'>
        <img src={RightPanel} alt='left panel figma window' />
      </div>
      <div className='figma-window__left'>
        <img src={LeftPanel} alt='left panel figma window' />
      </div>
      <div className='wrapper'>
        <div className='inner-container' onClick={onClick} ref={containerRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

FigmaWindow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  figmaWindowRef: PropTypes.object,
  onClick: PropTypes.func,
  onMouseMove: PropTypes.func,
  containerRef: PropTypes.object,
};
