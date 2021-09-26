import React from 'react';
import { ReactComponent as FastVariantPropertiesIcon } from '../assets/fast-variants-properties.svg';
import { ReactComponent as IconsToolBoxIcon } from '../assets/icons-toolbox.svg';
import { ReactComponent as LayoutHandoffIcon } from '../assets/layout-handoff.svg';
import { ReactComponent as UnknownIcon } from '../assets/unknown.svg';
import PropTypes from 'prop-types';
const iconsMap = {
  'fast variants properties': FastVariantPropertiesIcon,
  'icons toolbox': IconsToolBoxIcon,
  'layout handoff': LayoutHandoffIcon,
  unknown: UnknownIcon,
};
function PluginIcon({ name, className }) {
  const IconName = iconsMap[name];
  return <IconName className={className} />;
}

export default PluginIcon;
PluginIcon.propTypes = {
  name: PropTypes.oneOf([
    'fast variants properties',
    'icons toolbox',
    'layout handoff',
    'unknown',
  ]),
  className: PropTypes.oneOf([
    'plugin-card__icon',
    'main__icon ',
    'new-idea__icon',
  ]),
};
