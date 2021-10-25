import { createContext, useState, useEffect } from 'react';
import * as React from 'react';
import { useMessage } from './hooks';

export const PluginContext = createContext(null);

export default function PluginContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [send, setSend] = useState(false);
  const [msg, setMsg] = useState(null);
  const [componentSetChildren, setComponentSetChildren] = useState(null);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const { postMessageToPlugin } = useMessage();

  useEffect(() => {
    if (send && data) postMessageToPlugin(msg, data);
    return () => setSend(false);
  }, [data]);

  onmessage = e => {
    const { msg, data } = e.data.pluginMessage;

    msg === 'propertiesTemplates' && setData(data);
    msg === 'propertiesTemplates' && setFinishedLoading(true);
    msg === 'componentSetChildren' && setComponentSetChildren(data);
    msg === 'disableSubmit' && setDisableSubmit(true);
    msg === 'allowSubmit' && setDisableSubmit(false);
  };
  const handleUpdate = (e, template, templateId, callback) => {
    e.preventDefault();

    setData(oldData => {
      const newTemplates = [...oldData];
      const currentTemplateLocation = newTemplates.findIndex(
        template => template.id === templateId
      );
      return [
        ...newTemplates.slice(0, currentTemplateLocation),
        template,
        ...newTemplates.slice(currentTemplateLocation + 1),
      ];
    });
    setMsg('updatedTemplate');
    setSend(true);
    callback();
  };

  const handleDelete = (e, templateId, callback) => {
    e.preventDefault();

    setData(oldData => {
      const newTemplates = [...oldData];
      const currentTemplateLocation = newTemplates.findIndex(
        template => template.id === templateId
      );

      return [
        ...newTemplates.slice(0, currentTemplateLocation),
        ...newTemplates.slice(currentTemplateLocation + 1),
      ];
    });

    setMsg('deletedTemplate');
    setSend(true);
    callback();
  };
  return (
    <PluginContext.Provider
      value={{
        finishedLoading,
        data,
        handleUpdate,
        handleDelete,
        setData,
        disableSubmit,
        componentSetChildren,
      }}>
      {children}
    </PluginContext.Provider>
  );
}
