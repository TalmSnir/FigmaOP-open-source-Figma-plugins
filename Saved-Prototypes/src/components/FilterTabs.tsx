import * as React from 'react';
import { Button } from 'react-figma-plugin-ds';
import { FlexContainer } from '.';
export default function FilterTabs() {
  const handleClick = () => {
    return;
  };
  return (
    <FlexContainer gap='xs' wrap>
      <Button isTertiary onClick={handleClick}>
        onTap
      </Button>
      <Button isTertiary onClick={handleClick}>
        onDrag
      </Button>
      <Button isTertiary onClick={handleClick}>
        whileHovering
      </Button>
      <Button isTertiary onClick={handleClick}>
        whilePressing
      </Button>
      <Button isTertiary onClick={handleClick}>
        mouseLeave
      </Button>
      <Button isTertiary onClick={handleClick}>
        mouseEnter
      </Button>
      <Button isTertiary onClick={handleClick}>
        afterDelay
      </Button>
      <Button isTertiary onClick={handleClick}>
        touchUp
      </Button>
      <Button isTertiary onClick={handleClick}>
        touchDown
      </Button>
      <Button isTertiary onClick={handleClick}>
        key/gamepad
      </Button>
    </FlexContainer>
  );
}
