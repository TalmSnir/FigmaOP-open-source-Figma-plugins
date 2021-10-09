import { useState, useEffect, useRef } from 'react';

export default function useFigmaWindow({
  containerRef,
  overlayRef,
  figmaWindowRef,
  pluginRef,
}) {
  const [elementClicked, setElementClicked] = useState(false);
  const [elementRect, setElementRect] = useState({
    offsetLeft: 0,
    offsetTop: 0,
    width: 0,
    height: 0,
  });

  const element = useRef(null);

  const handleClick = e => {
    e.stopPropagation();
    const target = e.target;

    if (target === containerRef.current) {
      element.current = containerRef.current;
      setElementClicked(false);
    } else if (
      target !== element.current &&
      ['h1', 'a', 'p'].includes(target.nodeName.toLowerCase())
    ) {
      // if (element.current !== null) {
      //   element.current.setAttribute('contenteditable', false);
      // }
      element.current = e.currentTarget;

      // element.current.setAttribute('contenteditable', true);
      element.current.style.outline = '';
      const { width, height, left } = element.current.getBoundingClientRect();

      let { offsetTop } = element.current;

      setElementRect({ width, height, offsetTop, left });
      setElementClicked(true);
    }
  };
  const handleMouseOver = e => {
    e.stopPropagation();
    if (element.current !== e.currentTarget) {
      e.target.style.outline = '2px solid var(--clr-blue)';
    }
  };
  const handleMouseLeave = e => {
    e.target.style.outline = '';
  };
  useEffect(() => {
    if (overlayRef !== null && elementClicked) {
      const { left, offsetTop, width, height } = elementRect;
      overlayRef.current.style.width = `${width}px`;
      overlayRef.current.style.height = `${height}px`;
      overlayRef.current.style.left = `${left}px`;
      overlayRef.current.style.top = `${offsetTop}px`;
    }
  }, [elementClicked, elementRect, overlayRef]);

  return {
    handleMouseOver,
    handleMouseLeave,
    handleClick,
    elementClicked,
  };
}