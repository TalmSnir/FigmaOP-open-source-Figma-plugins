import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Icon } from 'react-figma-plugin-ds';
const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: hsla(0, 0%, 0%, 0.5);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledContainer = styled.div`
  inline-size: 100%;
  padding: 0 0.5rem 0.5rem;
  background: hsl(0, 100%, 100%);
`;
const StyledHeader = styled.header`
  inline-size: 100%;
  margin-block-end: 0.5rem;
  & > * {
    margin-inline-start: -0.5rem;
  }
`;
export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <StyledModal>
      <StyledContainer>
        <StyledHeader>
          <Icon color='black8' name='back' onClick={onClose} />
        </StyledHeader>

        {children}
      </StyledContainer>
    </StyledModal>,
    document.getElementById('modal')
  );
}
