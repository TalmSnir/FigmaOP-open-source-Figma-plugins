import React from 'react';
import PluginIcon from '../PluginIcon';
import ButtonsGroup from '../ButtonsGroup';
import Button from '../Button';
import CardFooter from '../CardFooter';
function PluginCard({ pluginName, pluginDescription, pluginGif }) {
  return (
    <div className='plugin-card'>
      <PluginIcon name={pluginName} className='plugin-card__icon' />
      <h1 className='plugin-card__title'>{pluginName}</h1>
      <p className='plugin-card__description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit
        corporis animi, harum tempora dolore magni incidunt itaque sequi earum
        ipsum dolorem, officia iure. Veritatis quas ea libero molestias itaque.
      </p>
      <ButtonsGroup>
        <Button type='primary'>view plugin</Button>
        <Button type='secondary'>view source code</Button>
      </ButtonsGroup>
      <CardFooter />
    </div>
  );
}

export default PluginCard;
