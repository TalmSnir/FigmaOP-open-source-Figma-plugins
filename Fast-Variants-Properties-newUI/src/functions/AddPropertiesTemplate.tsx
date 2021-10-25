import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Button } from 'react-figma-plugin-ds';
import FormBody from '../components/FormBody';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';

export default function AddPropertiesTemplate() {
  const { data, setData } = useContext(PluginContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [template, setTemplate] = useState({
    name: 'new template',
    properties: null,
    id: 'new template-' + Math.floor(Math.random() * 999),
  });
  const { postMessageToPlugin } = useMessage();

  useEffect(() => {
    data && isSubmitted && postMessageToPlugin('newTemplate', data);
    setTemplate({
      name: null,
      properties: null,
      id: null,
    });

    setIsSubmitted(false);
  }, [isSubmitted]);

  const handleSubmit = e => {
    e.preventDefault();

    setData(oldData => {
      return [
        ...oldData,
        {
          ...template,
          id: template.name + Math.floor(Math.random() * 999),
        },
      ];
    });
    setIsSubmitted(true);
    e.target.reset();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FormBody
          template={template}
          setTemplate={setTemplate}
          inEditMode={false}
        />
        <Button isPrimary>Save template</Button>
      </form>
    </section>
  );
}
