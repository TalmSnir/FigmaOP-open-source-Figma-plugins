import React from 'react';
import PluginIcon from '../PluginIcon';
import ButtonsGroup from '../ButtonsGroup';
import Button from '../Button';
import CardFooter from '../CardFooter';
function PluginCard({ pluginName, pluginGif }) {
  return (
    <div>
      <PluginIcon name={pluginName} />
      <h1>{pluginName}</h1>
      <p>text</p>
      <ButtonsGroup>
        <Button type='primary'>view plugin</Button>
        <Button type='secondary'>view source code</Button>
      </ButtonsGroup>
      <CardFooter />
    </div>
  );
}

export default PluginCard;
