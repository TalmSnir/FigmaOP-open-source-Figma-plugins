import * as React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.6rem;
  width: 100%;
  border-radius: 2px;
  box-shadow: 0 0 0 1px var(--clr-black-1);
  border: 0;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 0 2px var(--clr-black-1);
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--clr-blue);
  }
`;

export default function InputMain({ onChange, placeholder }) {
  return (
    <StyledInput type='text' onChange={onChange} placeholder={placeholder} />
  );
}
