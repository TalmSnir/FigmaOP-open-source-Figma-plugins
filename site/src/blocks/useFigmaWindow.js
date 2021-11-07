import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function useFigmaWindow({ containerRef, overlayRef }) {
  const [elementClicked, setElementClicked] = useState(false);
  const [element, setElement] = useState(null);

  const handleClick = e => {
    e.stopPropagation();
    const target = e.target;

    if (target === containerRef.current) {
      setElementClicked(false);
      setElement(containerRef.current);
    } else if (
      target !== element &&
      ['h1', 'a', 'p'].includes(target.nodeName.toLowerCase())
    ) {
      setElement(e.currentTarget);
      setElementClicked(true);
    }
  };
  useEffect(() => {
    if (element && elementClicked) {
      const parentWidth = parseInt(
        getComputedStyle(element.parentElement).width
      );
      const parentPaddingLeft = parseInt(
        getComputedStyle(element.parentElement).paddingLeft
      );
      element.style.maxWidth = `${parentWidth - parentPaddingLeft * 2}px`;

      element.setAttribute('contenteditable', true);
      element.style.outline = '';
      element.style.position = 'relative';
    }
    return () => {
      if (element && elementClicked) {
        element.setAttribute('contenteditable', false);
      }
    };
  }, [element, elementClicked]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const ele = element;

    if (elementClicked && overlay && overlayRef) {
      ele.appendChild(overlay);
    }
  }, [elementClicked, overlayRef, element]);

  const handleMouseOver = e => {
    e.stopPropagation();
    if (element !== e.currentTarget) {
      e.target.style.outline = '2px solid var(--clr-blue)';
    }
  };
  const handleMouseLeave = e => {
    e.target.style.outline = '';
  };

  return {
    handleMouseOver,
    handleMouseLeave,
    handleClick,
    elementClicked,
  };
}

useFigmaWindow.propTypes = {
  containerRef: PropTypes.node,
  overlayRef: PropTypes.node,
};
