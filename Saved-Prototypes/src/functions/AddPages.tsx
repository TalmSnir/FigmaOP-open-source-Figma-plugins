import * as React from 'react';
import { useState } from 'react';
import { Input, Label, Button, Text } from 'react-figma-plugin-ds';
import { FlexContainer } from '../components';
import useMessage from '../hooks/useMessage';
export default function AddPages() {
  const { postMessageToPlugin } = useMessage();
  const [pages, setPages] = useState([]);
  const handleChange = value => {
    setPages(value.split(','));
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    postMessageToPlugin('createPages', pages);
  };
  return (
    <section>
      <Text size='xlarge' weight='bold'>
        Batch add
      </Text>
      <FlexContainer direction='column' gap='md'>
        <form onSubmit={handleSubmit}>
          <div className='flex-col'>
            <Label size='small' weight='medium'>
              pages names
            </Label>
            <Input onChange={handleChange} placeholder='page 1,page 2 ...' />
          </div>
          <Button isPrimary>Add multiple pages</Button>
        </form>
      </FlexContainer>
    </section>
  );
}
