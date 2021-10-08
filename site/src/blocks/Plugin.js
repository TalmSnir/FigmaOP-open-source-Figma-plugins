import React, { useRef, useState } from 'react';
import PluginIcon from '../components/Icons/PluginIcon';
import { ButtonsGroup, Button } from '../components/Buttons';
import Icon from '../components/Icons/Icon';
// import usePlugin from './usePlugin';
import useDragAndDrop from './useDragAndDrop';
export default function Plugin({ pluginRef, containerRef }) {
  // const { handleAddBorders, handleCreateShape, handleEditMode, inEditMode } =
  //   usePlugin({
  //     header,
  //     text,
  //     link,
  //   });
  const [isMoved, setIsMoved] = useState(false);
  const topBarRef = useRef();
  const onMouseDown = e => {
    if (!isMoved) {
      const top =
        pluginRef.current.getBoundingClientRect().top -
        containerRef.current.getBoundingClientRect().top;
      const left = pluginRef.current.getBoundingClientRect().left;
      pluginRef.current.style.left = `${left}px`;
      pluginRef.current.style.top = `${top}px`;
      pluginRef.current.style.position = 'absolute';
      setIsMoved(true);
    }
  };

  const onMouseMove = e => {
    let left =
      e.clientX -
      offset.left -
      containerRef.current.getBoundingClientRect().left;
    let top =
      e.clientY - offset.top - containerRef.current.getBoundingClientRect().top;

    const bottomEdge =
      containerRef.current.getBoundingClientRect().bottom +
      offset.top +
      pluginRef.current.innerHeight;
    const topEdge = 40; //40 px-top bar size
    const leftEdge = 0;
    const rightEdge =
      containerRef.current.getBoundingClientRect().right -
      containerRef.current.getBoundingClientRect().left;
    console.log(
      containerRef.current.getBoundingClientRect().right -
        containerRef.current.getBoundingClientRect().left -
        pluginRef.current.offsetWidth
    );
    //! change this

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
          try me
        </div>

        <Icon name='small-close' />
      </section>
      <section className='plugin__body'>
        <ButtonsGroup>
          <Button type='plugin'>create shapes</Button>
          <Button type='plugin'>add Borders</Button>
        </ButtonsGroup>
      </section>
    </div>
  );
}
//! TODO

//[]change the color of the font
//[]create shapes
//[]
// <div class='edit-mode'>
//         <button class='edit-mode__btn' data-function-name='enterEditMode'>
//           <svg
//             className='edit-mode__icon'
//             width='32'
//             height='32'
//             viewBox='0 0 32 32'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'>
//             <path
//               fill-rule='evenodd'
//               clip-rule='evenodd'
//               d='M12 16.05V9H13V16.05C14.1411 16.2816 15 17.2905 15 18.5C15 19.7095 14.1411 20.7184 13 20.95V23H12V20.95C10.8589 20.7184 10 19.7095 10 18.5C10 17.2905 10.8589 16.2816 12 16.05ZM14 18.5C14 19.3284 13.3284 20 12.5 20C11.6716 20 11 19.3284 11 18.5C11 17.6716 11.6716 17 12.5 17C13.3284 17 14 17.6716 14 18.5ZM19 23H20V15.95C21.1411 15.7184 22 14.7095 22 13.5C22 12.2905 21.1411 11.2816 20 11.05V9H19V11.05C17.8589 11.2816 17 12.2905 17 13.5C17 14.7095 17.8589 15.7184 19 15.95V23ZM21 13.5C21 12.6716 20.3284 12 19.5 12C18.6716 12 18 12.6716 18 13.5C18 14.3284 18.6716 15 19.5 15C20.3284 15 21 14.3284 21 13.5Z'
//               fill='black'
//               fill-opacity='0.8'
//             />
//           </svg>
//           <span>enter edit mode</span>
//         </button>
//       </div>
//       <div class='stroke-in-resize subsection'>
//         <label for='preserve-stroke-weight' class='row'>
//           <input
//             type='checkbox'
//             name='preserve-stroke-weight'
//             id='preserve-stroke-weight'
//             data-function-name='preserveStroke'
//             checked
//           />
//           preserve stroke weight in resize
//         </label>
//         <div class='info'>
//           <svg
//             class='info__icon'
//             width='16'
//             height='16'
//             viewBox='0 0 16 16'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'>
//             <path
//               d='M8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14ZM8 13C5.054 13 3 10.946 3 8C3 5.054 5.054 3 8 3C10.946 3 13 5.054 13 8C13 10.946 10.946 13 8 13ZM7.5 7.333H8.5V9.5V11.333H7.5V9.5V7.333ZM7.334 5.333C7.334 4.965 7.632 4.667 8.001 4.667C8.369 4.667 8.667 4.965 8.667 5.333C8.667 5.702 8.369 6 8.001 6C7.632 6 7.334 5.702 7.334 5.333Z'
//               fill='black'
//               fill-opacity='0.3'
//             />
//           </svg>
//           this rule will apply to all scaling functions
//         </div>
//       </div>

//       <section class='icons-resize'>
//         <h1>resize</h1>
//         <form
//           class='subsection'
//           id='resize-form'
//           data-function-name='addResizeButton'>
//           <div class='form__row'>
//             <label for='frame-size'>
//               frame size
//               <input
//                 type='number'
//                 name='frameSize'
//                 id='frame-size'
//                 value='48'
//                 data-function-name='resize'
//               />
//             </label>
//             <label for='icon-width'>
//               icon max width
//               <input
//                 type='number'
//                 name='iconMaxWidth'
//                 id='icon-width'
//                 value='32'
//                 data-function-name='resize'
//               />
//             </label>
//             <button
//               type='submit'
//               class='btn--primary'
//               id='resize-form__submit'
//               data-function-name='addResizeButton'>
//               save
//             </button>
//           </div>
//           <div class='info'>
//             <svg
//               class='info__icon'
//               width='16'
//               height='16'
//               viewBox='0 0 16 16'
//               fill='none'
//               xmlns='http://www.w3.org/2000/svg'>
//               <path
//                 d='M8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14ZM8 13C5.054 13 3 10.946 3 8C3 5.054 5.054 3 8 3C10.946 3 13 5.054 13 8C13 10.946 10.946 13 8 13ZM7.5 7.333H8.5V9.5V11.333H7.5V9.5V7.333ZM7.334 5.333C7.334 4.965 7.632 4.667 8.001 4.667C8.369 4.667 8.667 4.965 8.667 5.333C8.667 5.702 8.369 6 8.001 6C7.632 6 7.334 5.702 7.334 5.333Z'
//                 fill='black'
//                 fill-opacity='0.3'
//               />
//             </svg>
//             fill the inputs and press save to create new saved size button
//           </div>
//         </form>
//         <div class='saved-sizes subsection'>
//           <h2>saved sizes</h2>
//           <div class='saved-sizes__btns btns-group'></div>
//           <div class='info'>
//             <svg
//               class='info__icon'
//               width='16'
//               height='16'
//               viewBox='0 0 16 16'
//               fill='none'
//               xmlns='http://www.w3.org/2000/svg'>
//               <path
//                 d='M8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14ZM8 13C5.054 13 3 10.946 3 8C3 5.054 5.054 3 8 3C10.946 3 13 5.054 13 8C13 10.946 10.946 13 8 13ZM7.5 7.333H8.5V9.5V11.333H7.5V9.5V7.333ZM7.334 5.333C7.334 4.965 7.632 4.667 8.001 4.667C8.369 4.667 8.667 4.965 8.667 5.333C8.667 5.702 8.369 6 8.001 6C7.632 6 7.334 5.702 7.334 5.333Z'
//                 fill='black'
//                 fill-opacity='0.3'
//               />
//             </svg>
//             select icons to resize and press the button with the desired size.
//           </div>
//         </div>
//       </section>
