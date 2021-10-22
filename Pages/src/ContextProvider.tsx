import { createContext, useState } from 'react';
import * as React from 'react';

export const PluginContext = createContext(null);

export default function PluginContextProvider({ children }) {
  const [data, setData] = useState({});
  const [finishedLoading, setFinishedLoading] = useState(false);
  onmessage = e => {
    const { msg, data } = e.data.pluginMessage;

    (msg === 'pagesNames' || msg === 'templates') &&
      setData(oldData => {
        return { ...oldData, [msg]: [...data] };
      });
    msg === 'templates' && setFinishedLoading(true);
  };

  return (
    <PluginContext.Provider value={{ finishedLoading, data, setData }}>
      {children}
    </PluginContext.Provider>
  );
}
