import * as React from 'react';
import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  height: ${props => props.height};
  width: ${props => props.width};
  gap: 2rem;
  padding: ${props => `${props.padding}rem`};
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
}) {
  return (
    <StyledFlexContainer
      direction={direction}
      jc={jc}
      ai={ai}
      gap={gap}
      height={height}
      width={width}
      padding={padding}>
      {children}
    </StyledFlexContainer>
  );
}
