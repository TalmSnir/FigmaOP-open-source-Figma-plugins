import React from 'react';
import PluginIcon from '../PluginIcon';
import ButtonsGroup from '../ButtonsGroup';
import NavLink from '../NavLink';
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
  return (
    <div className='plugin-card'>
      <PluginIcon name={pluginName} className='plugin-card__icon' />
      <div className='plugin-card__text'>
        <h1 className='plugin-card__text--title'>{pluginName}</h1>
        <p className='plugin-card__text--description'>{pluginDescription}</p>
      </div>
      <ButtonsGroup>
        <NavLink
          target='_blank'
          type='button'
          btnVariant='primary'
          href={pluginFigmaCommunityPage}>
          view plugin
        </NavLink>
        <NavLink
          target='_blank'
          type='button'
          btnVariant='secondary'
          href={pluginRepo}>
          view source code
        </NavLink>
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
