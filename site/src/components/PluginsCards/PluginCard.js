import React from 'react';
import PluginIcon from '../Icons/PluginIcon';
import { ButtonsGroup } from '../Buttons';
import NavLink from '../Navigation/NavLink';
import CardFooter from './CardFooter';
import PropTypes from 'prop-types';
function PluginCard({
  plugin: {
    pluginName,
    pluginGif,
    pluginDescription,
    pluginRepo,
    pluginFigmaCommunityPage,
  }
}) {
  const disabled=pluginDescription==='Coming Soon...';
  return (
    <div className='plugin-card'>
      <PluginIcon name={pluginName} className='plugin-card__icon' />
      <div className='plugin-card__text'>
        <h2 className='plugin-card__text--title'>{pluginName}</h2>
        <p className='plugin-card__text--description'>{pluginDescription}</p>
      </div>
      <ButtonsGroup>
        <NavLink
        disabled={disabled}
          target='_blank'
          type='button'
          btnVariant='primary'
          href={pluginFigmaCommunityPage}>
          view plugin
        </NavLink>
        <NavLink
         disabled={disabled}
          target='_blank'
          type='button'
          btnVariant='secondary'
          href={pluginRepo}>
          view source code
        </NavLink>
      </ButtonsGroup>
      <CardFooter pluginGif={pluginGif}  disabled={disabled}/>
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
