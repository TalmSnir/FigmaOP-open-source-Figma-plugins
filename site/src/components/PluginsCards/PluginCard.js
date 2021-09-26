import React from 'react';
import PluginIcon from '../PluginIcon';
import ButtonsGroup from '../ButtonsGroup';
import Button from '../Button';
import CardFooter from '../CardFooter';
import PropTypes from 'prop-types';
function PluginCard({
  plugin: {
    pluginName,
    pluginGif,
    pluginDescription,
    pluginRepo,
    pluginFigmaCommunityPage,
  },
}) {
  console.log(pluginName);
  return (
    <div className='plugin-card'>
      <PluginIcon name={pluginName} className='plugin-card__icon' />
      <h1 className='plugin-card__title'>{pluginName}</h1>
      <p className='plugin-card__description'>{pluginDescription}</p>
      <ButtonsGroup>
        <Button type='primary' as='link' href={pluginFigmaCommunityPage}>
          view plugin
        </Button>
        <Button type='secondary'>view source code</Button>
      </ButtonsGroup>
      <CardFooter pluginGif={pluginGif} />
    </div>
  );
}

export default PluginCard;
PluginCard.propTypes = {
  pluginName: PropTypes.string,
  //change the gif type
  pluginGif: PropTypes.any,
  pluginDescription: PropTypes.string,
  pluginRepo: PropTypes.string,
  pluginFigmaCommunityPage: PropTypes.string,
};
