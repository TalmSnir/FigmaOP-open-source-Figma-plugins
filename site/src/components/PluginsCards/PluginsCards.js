import React from 'react';
import PluginCard from './PluginCard';
import { plugins } from '../../Data';
import Container from '../Container';
function PluginsCards() {
  return (
    <section className='plugins-cards'>
      <Container>
        <h1 className='plugins-cards__title'>explore plugins</h1>
        {plugins.map(plugin => (
          <PluginCard plugin={plugin} key={plugin.pluginName} />
        ))}
      </Container>
    </section>
  );
}

export default PluginsCards;
