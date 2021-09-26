import React from 'react';
import PluginCard from './PluginCard';
import { plugins } from '../../Data';

function PluginsCards() {
  return (
    <section className='plugins-cards'>
      {plugins.map(plugin => (
        <PluginCard plugin={plugin} key={plugin.pluginName} />
      ))}
    </section>
  );
}

export default PluginsCards;
