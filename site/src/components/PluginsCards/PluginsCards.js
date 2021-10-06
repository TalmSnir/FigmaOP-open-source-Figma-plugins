import React from 'react';
import PluginCard from './PluginCard';
import { plugins } from '../../data';
import Container from '../Container';
function PluginsCards() {
  return (
    <section className='plugins-cards' id='plugins'>
      <Container>
        <h1 className='plugins-cards__title'>explore plugins</h1>
        <div className='plugins-cards__content'>
          {plugins.map(plugin => (
            <PluginCard plugin={plugin} key={plugin.pluginName} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PluginsCards;
