import React from 'react';
import PluginCard from './PluginCard';
const plugins = ['fast-variants-properties', 'icons-toolbox', 'layout-handoff'];
function PluginsCards() {
  return (
    <>
      {plugins.map(plugin => (
        <PluginCard pluginName={plugin} key={plugin} />
      ))}
    </>
  );
}

export default PluginsCards;
