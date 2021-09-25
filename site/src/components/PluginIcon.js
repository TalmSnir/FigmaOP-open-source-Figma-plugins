import React from 'react';
import { ReactComponent as FastVariantPropertiesIcon } from '../assets/fast-variants-properties.svg';
import { ReactComponent as IconsToolBoxIcon } from '../assets/icons-toolbox.svg';
import { ReactComponent as LayoutHandoffIcon } from '../assets/layout-handoff.svg';
import { ReactComponent as UnknownIcon } from '../assets/unknown.svg';

const iconsMap = {
  'fast-variants-properties': FastVariantPropertiesIcon,
  'icons-toolbox': IconsToolBoxIcon,
  'layout-handoff': LayoutHandoffIcon,
  unknown: UnknownIcon,
};
function PluginIcon({ name, className }) {
  console.log(name);
  const IconName = iconsMap[name];
  return <IconName className={className} />;
}

export default PluginIcon;
