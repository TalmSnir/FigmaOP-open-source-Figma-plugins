import { useState } from 'react';
import PropTypes from 'prop-types';
export default function useDragAndDrop({
  onMouseDown,
  onMouseMove,
  onMouseUp,
}) {
  const [isMoving, setIsMoving] = useState(false);
  const [offset, setOffset] = useState({ top: 0, left: 0 });
  const handleMouseDown = e => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setOffset({ top: e.clientY - top, left: e.clientX - left });
    setIsMoving(true);

    onMouseDown(e);
  };
  const handleMouseUp = () => {
    setIsMoving(false);
    onMouseUp();
  };
  const handleMouseLeave = () => {
    setIsMoving(false);
    onMouseUp();
  };

  const handleMouseMove = e => {
    if (isMoving) {
      onMouseMove(e);
    }
  };

  return {
    handleMouseMove,
    handleMouseUp,
    handleMouseDown,
    handleMouseLeave,
    isMoving,
    offset,
  };
}

useDragAndDrop.propTypes = {
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
};
