import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Button, Text } from 'react-figma-plugin-ds';
import FormBody from '../components/FormBody';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';
export default function PagesTemplate() {
  const { data, setData } = useContext(PluginContext);
  const [template, setTemplate] = useState({
    templateName: null,
    pages: [],
    id: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { postMessageToPlugin } = useMessage();

  useEffect(() => {
    data &&
      data.templates &&
      isSubmitted &&
      postMessageToPlugin('newTemplate', data.templates);
    setTemplate({
      templateName: null,
      pages: [],
      id: null,
    });
    setIsSubmitted(false);
  }, [isSubmitted]);

  const handleSubmit = e => {
    e.preventDefault();

    template.templateName !== '' &&
      template.pages !== [] &&
      setData(oldData => {
        return {
          ...oldData,
          templates: [
            ...oldData.templates,
            {
              ...template,
              id: template.templateName + Math.floor(Math.random() * 999),
            },
          ],
        };
      });

    template.templateName !== '' &&
      template.pages !== [] &&
      setIsSubmitted(true);

    e.target.reset();
  };
  return (
    <section>
      <Text size='xlarge' weight='bold'>
        Templates
      </Text>
      <form onSubmit={handleSubmit}>
        <FormBody
          template={template}
          setTemplate={setTemplate}
          inEditMode={false}
        />
        <Button isPrimary>Create template</Button>
      </form>
    </section>
  );
}
