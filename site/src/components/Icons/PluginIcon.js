import React from 'react';
import FastVariantPropertiesIcon from '../../assets/fast-variants-properties.svg';
import IconsToolBoxIcon from '../../assets/icons-toolbox.svg';
import LayoutHandoffIcon from '../../assets/layout-handoff.svg';
import UnknownIcon from '../../assets/unknown.svg';
import SavedPrototypes from '../../assets/saved-prototypes.svg';
import gridSystem from '../../assets/grid-system.svg';
import PropTypes from 'prop-types';
const iconsMap = {
  'fast variants properties': FastVariantPropertiesIcon,
  'icons toolbox': IconsToolBoxIcon,
  'layout handoff': LayoutHandoffIcon,
  unknown: UnknownIcon,
  'saved prototypes': SavedPrototypes,
  'grid system': gridSystem,
};
function PluginIcon({ name, className }) {
  const IconName = iconsMap[name];
  return <img src={IconName} alt='plugin-icon' className={className} />;
}

export default PluginIcon;
PluginIcon.propTypes = {
  name: PropTypes.oneOf([
    'fast variants properties',
    'icons toolbox',
    'layout handoff',
    'unknown',
    'saved prototypes',
    'grid system',
  ]),
  className: PropTypes.oneOf([
    'plugin-card__icon',
    'main__icon ',
    'new-idea__icon',
  ]),
};
