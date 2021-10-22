import * as React from 'react';
import { useState, useContext, useRef } from 'react';
import { Checkbox, Button, Text } from 'react-figma-plugin-ds';
import { useMessage } from '../hooks';
import { PluginContext } from '../ContextProvider';
import { FlexContainer, Separator } from '../components';
export default function DeletePages() {
  const [pagesToDelete, setPagesToDelete] = useState([]);
  const { finishedLoading, data } = useContext(PluginContext);
  const { postMessageToPlugin } = useMessage();

  const ref = useRef(null);

  const handleChange = page => {
    const idx = pagesToDelete.findIndex(pageName => pageName === page);

    idx !== -1
      ? setPagesToDelete(pagesToDelete => {
          const clonePages = [...pagesToDelete];
          clonePages.splice(idx, 1);
          return clonePages;
        })
      : setPagesToDelete(pagesToDelete => [...pagesToDelete, page]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    postMessageToPlugin('deletePages', pagesToDelete);
    handleSelectAll(false);
  };
  const handleSelectAll = e => {
    e ? setPagesToDelete([...data.pagesNames]) : setPagesToDelete([]);
    const checkboxes = ref.current.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => (checkbox.checked = e));
  };
  return (
    <section>
      <Text size='xlarge' weight='bold'>
        Batch delete
      </Text>
      <FlexContainer direction='column' gap='md'>
        <form ref={ref} onSubmit={handleSubmit}>
          {finishedLoading && data.pagesNames.length > 0 ? (
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
            data.pagesNames.map((page, id) => {
              return (
                <Checkbox
                  key={`${page + id}`}
                  label={page}
                  onChange={() => handleChange(page)}
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
