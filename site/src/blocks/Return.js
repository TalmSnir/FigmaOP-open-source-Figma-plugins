import React, { useRef, useState } from 'react';
import Plugin from './Plugin';
import Icon from '../components/Icons/Icon';
import NavLink from '../components/Navigation/NavLink';
import { mainRepo } from '../data';
import ElementOverlay from '../components/ElementOverlay';
import useFigmaWindow from './useFigmaWindow';
import FigmaWindow from './FigmaWindow';
function Return() {
  const pluginRef = useRef();
  const figmaWindowRef = useRef();
  const containerRef = useRef();
  const overlayRef = useRef();
  const [pluginStates, setPluginStates] = useState({
    addBorders: false,
    rotate: false,
    showIcon: false,
    duplicateIcons: { action: false, sizes: [] },
  }); //! !!!use object with state
  const { handleClick, handleMouseOver, handleMouseLeave, elementClicked } =
    useFigmaWindow({ pluginRef, figmaWindowRef, containerRef, overlayRef });

  return (
    <section className='return' id='return'>
      {elementClicked ? <ElementOverlay overlayRef={overlayRef} /> : null}
      <FigmaWindow
        className='figma-window'
        figmaWindowRef={figmaWindowRef}
        onClick={handleClick}
        containerRef={containerRef}>
        <div className='return__plugin'>
          <Plugin
            containerRef={containerRef}
            pluginRef={pluginRef}
            pluginStates={pluginStates}
            setPluginStates={setPluginStates}
          />
        </div>
        <div className='icons-group'>
          {pluginStates.showIcon ? (
            <Icon name='figma-lg' className='plugin-add-icon' />
          ) : null}
          {pluginStates.duplicateIcons.action
            ? pluginStates.duplicateIcons.sizes.map((size, id) => {
                return (
                  <Icon
                    name='figma-lg'
                    className={`plugin-add-icon-${size}`}
                    key={id}
                  />
                );
              })
            : null}
        </div>
        <div
          className={`return__text ${
            pluginStates.addBorders ? 'add-borders' : ''
          } ${pluginStates.rotate ? 'add-rotate' : ''}`}>
          <h1
            className='return__title'
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}>
            About & contribution
          </h1>
          <p
            className='return__desc'
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}>
            FigmaOp is a project dedicated to creating simple but effective
            tools to help with the day to day tasks of designers and developers.{' '}
            <br />
            <br />
            one of the main goals of this project is to allow junior developers
            to give back to the community by building small scale application
            with open source in mind.
            <br /> As we all know the best way to learn is to build and what is
            better than making something that people can actually use?!
            <span>Do you want to help others and build awesome plugins?</span>
          </p>
          <NavLink
            href={mainRepo}
            target='_blank'
            type='link'
            iconName='arrow-right'
            iconSide='right'>
            start here
          </NavLink>
        </div>
      </FigmaWindow>
    </section>
  );
}

export default Return;
