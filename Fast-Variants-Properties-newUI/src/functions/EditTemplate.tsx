import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Button, Text } from 'react-figma-plugin-ds';
import FormBody from '../components/FormBody';
import { PluginContext } from '../ContextProvider';

export default function EditTemplate({ templateId, onClose }) {
  const { data, handleUpdate, handleDelete } = useContext(PluginContext);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    const currentTemplateLocation = data.findIndex(
      template => template.id === templateId
    );

    data &&
      currentTemplateLocation !== -1 &&
      setTemplate(data[currentTemplateLocation]);
  }, []);

  return (
    <section className='modal'>
      <Text size='xlarge' weight='bold'>
        Edit template
      </Text>
      <form>
        {template && (
          <FormBody
            template={template}
            setTemplate={setTemplate}
            inEditMode={true}
          />
        )}
        <div className='flex-row'>
          <Button
            isPrimary
            onClick={e => handleUpdate(e, template, templateId, onClose)}>
            Save changes
          </Button>
          <Button
            isPrimary
            isDestructive
            onClick={e => handleDelete(e, templateId, onClose)}>
            Delete template
          </Button>
        </div>
      </form>
    </section>
  );
}
