import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { Text, Icon } from 'react-figma-plugin-ds';
import { PluginContext } from '../ContextProvider';

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 2px solid var(--clr-blue);
  border-bottom: 0.5px solid var(--clr-black-3);
  inline-size: 100%;
  padding-inline-start: 0.5rem;
  cursor: ${props => (props.disable ? 'not-allowed' : 'pointer')};
`;
const EllipsisText = styled(Text)`
  max-inline-size: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default function TemplateContainer({ template, onClick, onEditClick }) {
  const { disableSubmit } = useContext(PluginContext);

  return (
    <StyledLi
      onClick={() => !disableSubmit && onClick()}
      disable={disableSubmit}>
      <EllipsisText size='small' weight='medium'>
        {template.name}
      </EllipsisText>
      <Icon
        color='black8'
        name='settings'
        onClick={e => onEditClick(e, template.id)}></Icon>
    </StyledLi>
  );
}
