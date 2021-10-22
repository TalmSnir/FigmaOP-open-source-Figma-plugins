import * as React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.div`
  block-size: 0.5px;
  inline-size: 100%;
  background-color: var(--clr-black-3);
`;
export default function Separator() {
  return <StyledSeparator></StyledSeparator>;
}
