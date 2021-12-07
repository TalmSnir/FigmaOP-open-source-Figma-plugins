import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon } from 'react-figma-plugin-ds';
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left-width: 4px;
  border-left-style: solid;

  border-left-color: ${props => {
    switch (props.animationTriggerType) {
      case 'ON_CLICK':
        return 'var(--clr-blue)';
      case 'ON_HOVER':
        return 'var(--clr-red)';
      case 'ON_MOUSEENTER':
        return 'var(--clr-purple)';
      case 'ON_MOUSELEAVE':
        return 'var(--clr-green)';
      case 'ON_MOUSEDOWN':
        return 'var(--clr-yellow)';
      case 'ON_TAP':
        return 'var(--clr-pink)';
      case 'ON_DARG':
        return 'var(--clr-blue)';
      case 'ON_KEYPRESS':
        return 'var(--clr-black)';
      case 'ON_TOUCHDOWN':
        return 'var(--clr-black)';
      case 'ON_TOUCHUP':
        return 'var(--clr-black)';
      case 'AFTER_DELAY':
        return 'var(--clr-black)';
    }
  }};
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
export default function AnimationsTemplateContainer({
  templateData,
  onClick,
  onEditClick,
  animationTriggerType,
}) {
  return (
    <StyledLi
      onClick={() => onClick(templateData.pages)}
      animationTriggerType={animationTriggerType}>
      <EllipsisText size='small' weight='medium'>
        {templateData.templateName}
      </EllipsisText>
      <Icon
        color='black8'
        name='settings'
        onClick={e => onEditClick(e, templateData.id)}></Icon>
    </StyledLi>
  );
}
