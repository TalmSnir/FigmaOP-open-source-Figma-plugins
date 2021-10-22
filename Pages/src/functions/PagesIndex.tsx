import * as React from 'react';
import { Button, Text } from 'react-figma-plugin-ds';
import { useMessage } from '../hooks';
import { FlexContainer } from '../components';
export default function PagesIndex() {
  const { postMessageToPlugin } = useMessage();
  const handleClick = () => {
    postMessageToPlugin('createIndex', '');
  };
  return (
    <section>
      <Text size='xlarge' weight='bold'>
        Index
      </Text>
      <FlexContainer direction='column' gap='md'>
        <Button isPrimary onClick={handleClick}>
          Create pages index
        </Button>
      </FlexContainer>
    </section>
  );
}
