import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Button } from 'react-figma-plugin-ds';
import FormBody from '../components/FormBody';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';
export default function GridTemplate() {
  const initialState = {
    templateName: null,
    maxWidth: 0,
    minWidth: 0,
    pattern: 'Grid',
    alignment: 'Stretch',
    count: 5,
    gutter: 20,
    size: 8,
    offset: 0,
    visible: true,
    color: { r: 1, g: 0, b: 0, a: 0.1 },
    id: null,
  };
  const { data, setData } = useContext(PluginContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [template, setTemplate] = useState(initialState);
  const { postMessageToPlugin } = useMessage();

  useEffect(() => {
    data && isSubmitted && postMessageToPlugin('newTemplate', data);
    setTemplate(initialState);

    setIsSubmitted(false);
  }, [isSubmitted]);

  const handleSubmit = e => {
    e.preventDefault();

    setData(oldData => {
      return [
        ...oldData,
        {
          ...template,
          id: template.templateName + Math.floor(Math.random() * 999),
        },
      ];
    });
    setIsSubmitted(true);
    e.target.reset();
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className='grid'>
        <FormBody
          isSubmitted={isSubmitted}
          template={template}
          setTemplate={setTemplate}
          inEditMode={false}
        />
        <Button isPrimary>Save template</Button>
      </form>
    </section>
  );
}
