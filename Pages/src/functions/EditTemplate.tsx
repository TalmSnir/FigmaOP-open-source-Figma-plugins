import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Input, Label, Button, Text } from 'react-figma-plugin-ds';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';

export default function EditTemplate({ templateId, onClose }) {
  const { postMessageToPlugin } = useMessage();
  const { data, setData } = useContext(PluginContext);
  const [pages, setPages] = useState([]);
  const [templateName, setTemplateName] = useState('');
  const [msg, setMessage] = useState(null);

  useEffect(() => {
    const currentTemplateLocation = data.templates.findIndex(
      template => template['templateId'] === templateId
    );
    data &&
      data.templates &&
      currentTemplateLocation !== -1 &&
      setPages(data.templates[currentTemplateLocation].pages);
    data &&
      data.templates &&
      currentTemplateLocation !== -1 &&
      setTemplateName(data.templates[currentTemplateLocation].templateName);
  }, []);

  useEffect(() => {
    console.log('here');
    if (msg && data) {
      console.log(msg, data);
      postMessageToPlugin(msg, [...data.templates]);
      onClose();
    }
  }, [data]);

  const handleChange = value => {
    setPages(value.split(','));
  };
  const handleTemplateName = value => {
    setTemplateName(value);
  };
  const handleUpdate = e => {
    e.preventDefault();
    setMessage('updatedTemplate');

    setData(oldData => {
      const newTemplates = [...oldData.templates];
      const currentTemplateLocation = newTemplates.findIndex(
        template => template['templateId'] === templateId
      );
      return {
        ...oldData,
        templates: [
          ...newTemplates.slice(0, currentTemplateLocation),
          { templateName, pages, templateId },
          ...newTemplates.slice(currentTemplateLocation + 1),
        ],
      };
    });
  };

  const handleDelete = e => {
    e.preventDefault();
    setMessage('deletedTemplate');

    let filterTemplates = [...data.templates].filter(
      template => template['templateId'] !== templateId
    );
    
    console.log(filterTemplates);
    setData(oldData => {
      return {
        ...oldData,
        templates: filterTemplates,
      };
    });
  };
  return (
    <section className='modal'>
      <Text size='xlarge' weight='bold'>
        Edit template
      </Text>
      <form>
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            template name
          </Label>
          <Input
            defaultValue={templateName}
            onChange={handleTemplateName}
            placeholder='website design'
          />
        </div>
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            pages names
          </Label>
          <Input
            defaultValue={pages}
            onChange={handleChange}
            placeholder='enter list of pages separated by commas'
          />
        </div>
        <div className='flex-row'>
          <Button isPrimary onClick={handleUpdate}>
            Save changes
          </Button>
          <Button isPrimary isDestructive onClick={handleDelete}>
            Delete template
          </Button>
        </div>
      </form>
    </section>
  );
}
