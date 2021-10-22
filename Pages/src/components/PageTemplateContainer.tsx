import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon } from 'react-figma-plugin-ds';
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 2px solid var(--clr-blue);
  border-bottom: 0.5px solid var(--clr-black-3);
  inline-size: 100%;
  padding-inline-start: 0.5rem;
  cursor: pointer;
`;
const EllipsisText = styled(Text)`
  max-inline-size: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default function PageTemplateContainer({
  templateName,
  templateId,
  pages,
  onClick,
  onEditClick,
}) {
  return (
    <StyledLi onClick={() => onClick(pages)}>
      <EllipsisText size='small' weight='medium'>
        {templateName}
      </EllipsisText>
      <Icon
        color='black8'
        name='settings'
        onClick={e => onEditClick(e, templateId)}></Icon>
    </StyledLi>
  );
}
