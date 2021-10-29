import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { Text, Icon } from 'react-figma-plugin-ds';
import { PluginContext } from '../ContextProvider';
import { FlexContainer } from '.';
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 2px solid var(--clr-blue);
  border-bottom: 0.5px solid var(--clr-black-3);
  inline-size: 100%;
  padding-inline-start: 0.5rem;
  cursor: ${props => (props.disableSubmit ? 'not-allowed' : 'pointer')};
`;
const EllipsisText = styled(Text)`
  max-inline-size: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default function TemplateContainer({
  templateData,
  onClick,
  onEditClick,
}) {
  const { disableSubmit } = useContext(PluginContext);
  const pattern =
    templateData.pattern === 'Grid'
      ? 'uniform'
      : templateData.pattern.toLowerCase();
  return (
    <StyledLi
      onClick={() => !disableSubmit && onClick(templateData)}
      disableSubmit={disableSubmit}>
      <FlexContainer ai='center' gap='xs'>
        <Icon color='black8' name={`layout-grid-${pattern}`} />
        <EllipsisText size='small' weight='medium'>
          {templateData.templateName}
        </EllipsisText>
      </FlexContainer>
      <Icon
        color='black8'
        name='settings'
        onClick={e => onEditClick(e, templateData.id)}></Icon>
    </StyledLi>
  );
}
