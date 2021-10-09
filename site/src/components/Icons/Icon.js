import React from 'react';
import PropTypes from 'prop-types';
import {
  FiMenu,
  FiFigma,
  FiGithub,
  FiStar,
  FiDribbble,
  FiLinkedin,
  FiX,
  FiThumbsUp,
  FiLink,
  FiExternalLink,
  FiArrowRight,
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { ReactComponent as RepoIcon } from '../../assets/github-repo.svg';
import { ReactComponent as BuyMeaCoffee } from '../../assets/BuyMeaCoffee.svg';
import { ReactComponent as Settings } from '../../assets/adjust.svg';
import { ReactComponent as Info } from '../../assets/info.svg';
import { ReactComponent as SmallClose } from '../../assets/x.svg';
import { ReactComponent as FigmaLarge } from '../../assets/figmalarge.svg';

const iconsMap = {
  menu: FiMenu,
  figma: FiFigma,
  github: FiGithub,
  'github-circle': FaGithub,
  star: FiStar,
  dribbble: FiDribbble,
  linkedin: FiLinkedin,
  close: FiX,
  thumbsUp: FiThumbsUp,
  link: FiLink,
  externalLink: FiExternalLink,
  repo: RepoIcon,
  'arrow-right': FiArrowRight,
  buyMeaCoffee: BuyMeaCoffee,
  settings: Settings,
  info: Info,
  'small-close': SmallClose,
  'figma-lg': FigmaLarge,
};
function Icon({ name, className }) {
  const IconName = iconsMap[name];
  return <IconName className={className} />;
}

export default Icon;
Icon.propTypes = {
  name: PropTypes.oneOf([
    'menu',
    'figma',
    'github',
    'github-circle',
    'star',
    'dribbble',
    'linkedin',
    'close',
    'thumbsUp',
    'link',
    'externalLink',
    'repo',
    'arrow-right',
    'buyMeaCoffee',
    'settings',
    'info',
    'small-close',
    'figma-lg',
  ]),
};
