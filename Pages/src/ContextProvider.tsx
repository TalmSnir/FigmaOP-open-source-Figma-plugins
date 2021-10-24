import { createContext, useState, useEffect } from 'react';
import * as React from 'react';
import { useMessage } from './hooks';
export const PluginContext = createContext(null);

export default function PluginContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [send, setSend] = useState(false);
  const [msg, setMsg] = useState(null);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const { postMessageToPlugin } = useMessage();

  useEffect(() => {
    if (send && data) postMessageToPlugin(msg, data.templates);
    return () => setSend(false);
  }, [data]);

  onmessage = e => {
    const { msg, data } = e.data.pluginMessage;

    (msg === 'pages' || msg === 'templates') &&
      setData(oldData => {
        return { ...oldData, [msg]: data };
      });
    msg === 'templates' && setFinishedLoading(true);
  };
  const handleUpdate = (e, template, templateId, callback) => {
    e.preventDefault();

    setData(oldData => {
      const newTemplates = [...oldData.templates];
      const currentTemplateLocation = newTemplates.findIndex(
        template => template.id === templateId
      );
      return {
        ...oldData,
        templates: [
          ...newTemplates.slice(0, currentTemplateLocation),
          template,
          ...newTemplates.slice(currentTemplateLocation + 1),
        ],
      };
    });
    setMsg('updatedTemplate');
    setSend(true);
    callback();
  };

  const handleDelete = (e, templateId, callback) => {
    e.preventDefault();

    setData(oldData => {
      const newTemplates = [...oldData.templates];
      return {
        ...oldData,
        templates: [
          ...newTemplates.filter(template => template.id !== templateId),
        ],
      };
    });
    setMsg('deletedTemplate');
    setSend(true);
    callback();
  };
  return (
    <PluginContext.Provider
      value={{ finishedLoading, data, handleUpdate, handleDelete, setData }}>
      {children}
    </PluginContext.Provider>
  );
}
