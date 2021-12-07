import * as React from 'react';
import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  height: ${props => props.height};
  width: ${props => props.width};
  gap: ${props => {
    if (!props.gap) return '2rem';
    else {
      switch (props.gap) {
        case 'xs':
          return '0.5rem';
        case 'sm':
          return '1rem';
        case 'md':
          return '2rem';
        case 'lg':
          return '4rem';
        case 'Xl':
          return '8rem';
      }
    }
  }};
  padding: ${props => `${props.padding}rem`};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
`;
export default function FlexContainer({
  children,
  direction = 'row',
  gap = 'sm',
  ai = 'flex-start',
  jc = 'center',
  height = 'auto',
  width = 'auto',
  padding = 0,
  wrap = null,
}) {
  return (
    <StyledFlexContainer
      direction={direction}
      jc={jc}
      ai={ai}
      gap={gap}
      height={height}
      width={width}
      padding={padding}
      wrap={wrap}>
      {children}
    </StyledFlexContainer>
  );
}
