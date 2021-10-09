import { useState } from 'react';

export default function useDragAndDrop({ onMouseDown, onMouseMove }) {
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
  };
  const handleMouseLeave = () => {
    setIsMoving(false);
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
