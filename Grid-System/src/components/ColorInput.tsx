import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';

import styled from 'styled-components';

const ColorInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-inline-size: 144px;
  overflow: hidden;
  padding: 0;
  isolation: isolate;
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    right: 46px;
    block-size: calc(100% - 2px);
    inline-size: 0.5px;
    background: var(--silver);
    opacity: 0;
  }
  &:focus-within {
    color: var(--black);
    border: 1px solid var(--blue);
    outline: 1px solid var(--blue);
    outline-offset: -2px;
    &::before {
      opacity: 1;
    }
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;
const ColorBlock = styled.div`
  block-size: 16px;
  min-inline-size: 16px;
  inline-size: 16px;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.bg[1]?.toLowerCase() === 'f' ? 'var(--silver)' : 'transparent'};
  overflow: hidden;
  margin-inline-start: 8px;
  position: relative;
  &:focus-within {
    border-color: var(--blue);
  }
`;
const InputColor = styled.input`
  appearance: none;
  border: 0;
  padding: 0;
  outline: 0;
  inline-size: 16px;
  block-size: 14px;
  opacity: 0;
`;
const ColorRight = styled.span.attrs(props => ({
  style: {
    background: props.bg,
  },
}))`
  position: absolute;
  top: 0;
  right: 0;
  inline-size: 8px;
  block-size: 14px;
  z-index: 1;
  pointer-events: none;
  opacity: ${props => parseFloat(props.opacity) / 100};
`;
const ColorLeft = styled.span.attrs(props => ({
  style: {
    background: props.bg,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  inline-size: 8px;
  block-size: 14px;
  z-index: 1;
  pointer-events: none;
`;
const CheckerBoard = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  block-size: 14px;
  inline-size: 8px;
  background-size: 8px 16px;
  background-repeat: no-repeat;
  pointer-events: none;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAArij59AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABVSURBVHgB3Y/NCUAhDIPr4w3gBMUV3cARHNF2AjfQCgoi/hy8+UFJDyEhiogSVBCxvcDMQcR9sMbI+Z2hoFUSulgY604JZ8M/i+3r7iueWBF2K6KIzX7PK2T3F7HVAAAAAElFTkSuQmCC');
`;
const InputOpacity = styled.input`
  box-sizing: border-box;
  inline-size: 46px;
  block-size: 100%;
  border-color: transparent;
  background-color: transparent;
  padding-inline-start: 8px;
  font-size: var(--font-size-xsmall);
  font-weight: var(--font-weight-normal);
  color: var(--black8);
  appearance: none;
  border: 0;
  outline: 0;
  letter-spacing: var(--font-letter-spacing-neg-xsmall);
  line-height: var(--line-height);
  &::selection {
    color: var(--black);
    background-color: var(--blue3);
  }
`;
const InputColorCode = styled.input`
  box-sizing: border-box;
  block-size: 100%;
  inline-size: 100%;
  padding-inline-start: 8px;
  color: var(--black8);
  font-size: var(--font-size-xsmall);
  font-weight: var(--font-weight-normal);
  appearance: none;
  border: 0;
  outline: 0;
  letter-spacing: var(--font-letter-spacing-neg-xsmall);
  line-height: var(--line-height);
  &::selection {
    color: var(--black);
    background-color: var(--blue3);
  }
`;

export default function ColorInput({
  handleColorChange,
  handleOpacityChange,
  color,
  opacity,
}) {
  const ColorCodeInputRef = useRef(null);
  const opacityInputRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prevColorCode, setPrevColorCode] = useState('#FFFFFF');
  const [currentOpacity, setCurrentOpacity] = useState('100%');
  const [colorPicker, setColorPicker] = useState('#FFFFFF');

  const checkOpacity = useCallback(opacity => {
    const initialOpacity = 100 + '%';
    const regex = /^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/;
    let opacityTest = regex.test(opacity.replace('%', ''));

    if (!opacityTest) return initialOpacity;
    else {
      let newOpacity = parseFloat(opacity);
      if (newOpacity <= 0) return 0 + '%';
      if (newOpacity >= 100) return initialOpacity;
      if (newOpacity % Math.floor(newOpacity) === 0)
        return Math.round(newOpacity * Math.pow(10, 0)) / Math.pow(10, 0) + '%';
      return Math.round(newOpacity * Math.pow(10, 2)) / Math.pow(10, 2) + '%';
    }
  }, []);
  useEffect(() => {
    if (
      ColorCodeInputRef &&
      ColorCodeInputRef.current &&
      opacityInputRef &&
      opacityInputRef.current &&
      !isSubmitted
    ) {
      ColorCodeInputRef.current.value = color.replace('#', '').toUpperCase();
      opacityInputRef.current.value = opacity * 100 + '%';
      setColorPicker(color);
      setCurrentOpacity(opacityInputRef.current.value);
      setPrevColorCode(ColorCodeInputRef.current.value);
    } else if (isSubmitted) {
      handleColorChange(colorPicker.toUpperCase());
      handleOpacityChange(parseFloat(currentOpacity) / 100);
      console.log(parseFloat(currentOpacity) / 100);
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  const handleColorInputChange = e => {
    ColorCodeInputRef.current.value = e.target.value
      .replace('#', '')
      .toUpperCase();
    setColorPicker(e.target.value);
  };

  const handleBlur = () => {
    const opacity = opacityInputRef.current;

    const color = ColorCodeInputRef.current;

    const colorTest = /([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color.value);

    if (colorTest) {
      color.value = color.value.toUpperCase();
    } else {
      color.value = prevColorCode;
    }
    opacity.value = checkOpacity(opacity.value);
    console.log(opacityInputRef.current.value);
    setCurrentOpacity(opacity.value);
    setPrevColorCode(color.value);
    setColorPicker('#' + color.value);
    setIsSubmitted(true);
  };
  return (
    <ColorInputContainer
      className='input__field'
      onBlur={handleBlur}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === 'Escape') {
          e.target.blur();
        }
      }}>
      <ColorBlock bg={colorPicker}>
        <InputColor
          type='color'
          onChange={handleColorInputChange}
          value={colorPicker}
        />
        <ColorLeft bg={colorPicker}></ColorLeft>
        <ColorRight opacity={currentOpacity} bg={colorPicker}></ColorRight>
        <CheckerBoard />
      </ColorBlock>
      <InputColorCode type='text' maxLength='6' ref={ColorCodeInputRef} />
      <InputOpacity type='text' ref={opacityInputRef} />
    </ColorInputContainer>
  );
}
