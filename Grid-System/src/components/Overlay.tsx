import * as React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: absolute;
  block-size: 100%;
  inline-size: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
export default function Overlay() {
  return <StyledOverlay></StyledOverlay>;
}
