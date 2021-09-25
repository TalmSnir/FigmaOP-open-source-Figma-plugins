import React from 'react';
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
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { ReactComponent as RepoIcon } from '../assets/github-repo.svg';
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
};
function Icon({ name, className }) {
  const IconName = iconsMap[name];
  return <IconName className={className} />;
}

export default Icon;
