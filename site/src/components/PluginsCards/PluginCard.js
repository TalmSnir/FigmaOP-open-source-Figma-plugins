import React from 'react';

import { ButtonsGroup } from '../Buttons';
import NavLink from '../Navigation/NavLink';
import CardFooter from './CardFooter';
import PropTypes from 'prop-types';
function PluginCard({
  plugin: { name, gif, description, repo, figmaCommunity, icon },
}) {
  const disabled = description === 'Coming Soon...';
  return (
    <div className='plugin-card'>
      <img src={icon} alt='plugin-icon' className='plugin-card__icon' />
      <div className='plugin-card__text'>
        <h2 className='plugin-card__text--title'>{name}</h2>
        <p className='plugin-card__text--description'>{description}</p>
      </div>
      <ButtonsGroup>
        <NavLink
          disabled={disabled}
          target='_blank'
          type='button'
          btnVariant='primary'
          href={figmaCommunity}>
          view plugin
        </NavLink>
        <NavLink
          disabled={disabled}
          target='_blank'
          type='button'
          btnVariant='secondary'
          href={repo}>
          view source code
        </NavLink>
      </ButtonsGroup>
      <CardFooter gif={gif} disabled={disabled} />
    </div>
  );
}

export default PluginCard;
PluginCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.elementType,
  gif: PropTypes.elementType,
  description: PropTypes.string,
  repo: PropTypes.string,
  figmaCommunity: PropTypes.string,
};
