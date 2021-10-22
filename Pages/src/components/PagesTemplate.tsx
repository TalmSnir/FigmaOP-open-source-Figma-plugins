import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Input, Label, Button, Text } from 'react-figma-plugin-ds';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';
export default function PagesTemplate() {
  const { data, setData } = useContext(PluginContext);
  const [pages, setPages] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [templateName, setTemplateName] = useState('');
  const { postMessageToPlugin } = useMessage();
  useEffect(() => {
    data &&
      data.templates &&
      isSubmitted &&
      postMessageToPlugin('newTemplate', [...data.templates]);
    setIsSubmitted(false);
  }, [isSubmitted]);

  const handleChange = value => {
    setPages(value.split(','));
  };
  const handleTemplateName = value => {
    setTemplateName(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    // if (templateName === '' || pages === []) return;

    templateName !== '' &&
      pages !== [] &&
      setData(oldData => {
        return {
          ...oldData,
          templates: [
            ...oldData.templates,
            {
              templateName,
              pages,
              templateId: templateName + Math.floor(Math.random() * 999),
            },
          ],
        };
      });
    templateName !== '' && pages !== [] && setIsSubmitted(true);
    setTemplateName('');
    setPages([]);
  };
  return (
    <section>
      <Text size='xlarge' weight='bold'>
        Templates
      </Text>
      <form onSubmit={handleSubmit}>
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            template name
          </Label>
          <Input onChange={handleTemplateName} placeholder='website design' />
        </div>
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            pages names
          </Label>
          <Input
            onChange={handleChange}
            placeholder='enter list of pages separated by commas'
          />
        </div>
        <Button isPrimary>Create template</Button>
      </form>
    </section>
  );
}
