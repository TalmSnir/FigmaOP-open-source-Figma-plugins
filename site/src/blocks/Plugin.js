import React, { useRef, useState } from 'react';
import PluginIcon from '../components/Icons/PluginIcon';
import { ButtonsGroup, Button } from '../components/Buttons';
import Icon from '../components/Icons/Icon';
import usePlugin from './usePlugin';
import useDragAndDrop from './useDragAndDrop';
export default function Plugin({
  pluginRef,
  containerRef,
  pluginStates,
  setPluginStates,
}) {
  const {
    handleAddBorders,
    handleRotate,
    handleAddIcon,
    handleDuplicateIcons,
  } = usePlugin({
    pluginStates,
    setPluginStates,
  });
  const [isMoved, setIsMoved] = useState(false);
  const [sizes, setSizes] = useState([]);
  const handleUpdateSizes = e => {
    setSizes(sizes => {
      let newSizes = [];
      if (e.target.checked) newSizes = [...sizes, e.target.dataset.size];
      else {
        newSizes = [...sizes];
        const id = newSizes.indexOf(e.target.dataset.size);
        newSizes.splice(id, 1);
      }

      return newSizes.sort((a, b) => parseInt(a) - parseInt(b));
    });
  };
  const topBarRef = useRef();
  const onMouseDown = e => {
    if (!isMoved) {
      const margin = parseInt(
        window.getComputedStyle(containerRef.current).marginLeft
      );

      const top =
        pluginRef.current.getBoundingClientRect().top -
        containerRef.current.getBoundingClientRect().top;
      const left =
        pluginRef.current.getBoundingClientRect().left -
        containerRef.current.getBoundingClientRect().left +
        margin;

      pluginRef.current.style.left = `${left}px`;
      pluginRef.current.style.top = `${top}px`;
      pluginRef.current.style.position = 'absolute';
      setIsMoved(true);
    }
  };

  const onMouseMove = e => {
    const margin = parseInt(
      window.getComputedStyle(containerRef.current).marginLeft
    );
    const sidePanelSize = 220; //220px-side panel svg size
    let left =
      e.clientX -
      offset.left -
      containerRef.current.getBoundingClientRect().left +
      margin;
    let top =
      e.clientY - offset.top - containerRef.current.getBoundingClientRect().top;

    const bottomEdge =
      containerRef.current.getBoundingClientRect().bottom -
      containerRef.current.getBoundingClientRect().top -
      pluginRef.current.offsetHeight;

    const topEdge = 40; //40px top bar svg size
    const leftEdge = window.innerWidth < 1440 ? 0 : sidePanelSize;
    const rightEdge =
      window.innerWidth < 1440
        ? containerRef.current.getBoundingClientRect().right -
          containerRef.current.getBoundingClientRect().left -
          pluginRef.current.offsetWidth +
          2 * margin
        : containerRef.current.getBoundingClientRect().right -
          containerRef.current.getBoundingClientRect().left -
          pluginRef.current.offsetWidth +
          2 * margin -
          sidePanelSize;

    //if the user is trying to drag outside the container from the top side.
    top = top < topEdge ? topEdge : top;
    //if the user is trying to drag outside the container from the bottom side.
    top = top > bottomEdge ? bottomEdge : top;
    //if the user is trying to drag outside the container from the left  side.
    left = left < leftEdge ? leftEdge : left;
    left = left > rightEdge ? rightEdge : left;
    //if the user is trying to drag outside the container from the  right side.

    pluginRef.current.style.left = `${left}px`;
    pluginRef.current.style.top = `${top}px`;
  };
  const {
    handleMouseLeave,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    isMoving,
    offset,
  } = useDragAndDrop({
    onMouseDown,
    onMouseMove,
  });

  return (
    <div
      className={`plugin ${isMoving ? 'moving' : ''}`}
      onMouseMove={handleMouseMove}
      ref={pluginRef}>
      <section
        className='plugin__top-bar'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={topBarRef}>
        <div className='left-side'>
          <PluginIcon name='unknown' />
          try me- (i can move)
        </div>

        <Icon name='small-close' />
      </section>
      <section className='plugin__body'>
        <ButtonsGroup direction='column'>
          <Button type='plugin' onClick={handleRotate}>
            {pluginStates.rotate ? 'unflip text' : 'flip text'}
          </Button>
          <Button type='plugin' onClick={handleAddBorders}>
            {pluginStates.addBorders ? 'remove borders' : 'add borders'}
          </Button>
          <Button type='plugin' onClick={handleAddIcon}>
            {pluginStates.showIcon ? 'remove icon' : 'add icon'}
          </Button>
        </ButtonsGroup>
        <div className='duplicate'>
          <div className='duplicate__checkboxes'>
            <label
              htmlFor='duplicate-icon__checkbox-size-1'
              className='col--center'>
              16
              <input
                type='checkbox'
                name='duplicate-icon__checkbox-size-1'
                data-size='16'
                id='duplicate-icon__checkbox-size-1'
                onChange={handleUpdateSizes}
              />
            </label>

            <label
              htmlFor='duplicate-icon__checkbox-size-2'
              className='col--center'>
              24
              <input
                type='checkbox'
                name='duplicate-icon__checkbox-size-2'
                data-size='24'
                id='duplicate-icon__checkbox-size-2'
                onChange={handleUpdateSizes}
              />
            </label>
            <label
              htmlFor='duplicate-icon__checkbox-size-3'
              className='col--center'>
              32
              <input
                type='checkbox'
                name='duplicate-icon__checkbox-size-3'
                data-size='32'
                id='duplicate-icon__checkbox-size-3'
                onChange={handleUpdateSizes}
              />
            </label>
            <label
              htmlFor='duplicate-icon__checkbox-size-4'
              className='col--center'>
              48
              <input
                type='checkbox'
                name='duplicate-icon__checkbox-size-4'
                data-size='48'
                data-function-name='duplicate'
                onChange={handleUpdateSizes}
              />
            </label>

            <label
              htmlFor='duplicate-icon__checkbox-size-5'
              className='col--center'>
              64
              <input
                type='checkbox'
                name='duplicate-icon__checkbox-size-5'
                data-size='64'
                data-function-name='duplicate'
                onChange={handleUpdateSizes}
              />
            </label>
          </div>
          <div className='duplicate__info'>select sizes to duplicate</div>
          <Button
            type='plugin'
            onClick={() => handleDuplicateIcons(sizes)}
            disabled={!pluginStates.showIcon}>
            {!pluginStates.showIcon ||
            (!pluginStates.duplicateIcons.action && pluginStates.showIcon)
              ? 'duplicate icon'
              : 'remove duplications'}
          </Button>
        </div>
      </section>
    </div>
  );
}
