import * as React from 'react';
import { useState, useContext, useRef } from 'react';
import { Checkbox, Button, Text, Icon } from 'react-figma-plugin-ds';
import { useMessage } from '../hooks';
import { PluginContext } from '../ContextProvider';
import { FlexContainer, Separator } from '../components';
export default function DeletePages() {
  const [pagesToDelete, setPagesToDelete] = useState([]);
  const { finishedLoading, data } = useContext(PluginContext);
  const { postMessageToPlugin } = useMessage();

  const ref = useRef(null);

  const handleChange = id => {
    const idx = pagesToDelete.findIndex(idx => idx === id);

    idx !== -1
      ? setPagesToDelete(pagesToDelete => {
          const clonePages = [...pagesToDelete];
          clonePages.splice(idx, 1);
          return clonePages;
        })
      : setPagesToDelete(pagesToDelete => [...pagesToDelete, id]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    postMessageToPlugin('deletePages', pagesToDelete);
    handleSelectAll(false);
  };
  const handleSelectAll = e => {
    e
      ? setPagesToDelete([...data.pages.map(page => page.id)])
      : setPagesToDelete([]);
    const checkboxes = ref.current.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => (checkbox.checked = e));
  };
  return (
    <section>
      <FlexContainer direction='row' jc='space-between' ai='center'>
        <Text size='xlarge' weight='bold'>
          Batch delete
        </Text>
        <Icon
          color='black8'
          name='reverse'
          onClick={() => postMessageToPlugin('updatePages', null)}
        />
      </FlexContainer>

      <FlexContainer direction='column' gap='md'>
        <form ref={ref} onSubmit={handleSubmit}>
          {finishedLoading && data.pages && data.pages.length > 0 ? (
            <Checkbox
              className='styled-checkbox'
              key='all-pages'
              label='select all'
              onChange={handleSelectAll}
              type='checkbox'
            />
          ) : null}
          <Separator />
          {finishedLoading &&
            data.pages &&
            data.pages.length > 0 &&
            data.pages.map(page => {
              return (
                <Checkbox
                  key={page.id}
                  label={page.name}
                  onChange={() => handleChange(page.id)}
                  type='checkbox'
                  checked
                />
              );
            })}
          <Button isDestructive isPrimary>
            Delete pages
          </Button>
        </form>
      </FlexContainer>
    </section>
  );
}
