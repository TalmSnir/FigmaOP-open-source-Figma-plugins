import React from 'react';

import { plugins, supportSources } from '../data';
import { FooterMenu, SocialsMenu } from '../components/Footer';

import Logo from '../components/Icons/Logo';
import Container from '../components/Container';
import NavLink from '../components/Navigation/NavLink';
function Footer() {
  return (
    <footer id='footer'>
      <Container>
        <div className='footer__info'>
          <NavLink href='#header'>
            <Logo theme='light' />
          </NavLink>
          <SocialsMenu />
          <NavLink
            href='https://www.buymeacoffee.com/TalmSnir'
            iconName='buyMeaCoffee'
            type='button'
            btnVariant='primary'
            iconSide='left'
            target='_blank'>
            Buy me a coffee
          </NavLink>

          <span className='footer__info__email'>talmsnirplugins@gmail.com</span>
          <span className='footer__info__rights'>
            © 2021 TalmSnir All rights reserved
          </span>
        </div>

        <div className='footer__menus'>
          <FooterMenu
            title='FigmaOP plugins'
            dataSection='pluginFigmaCommunityPage'
            dataTitle='pluginName'
            items={plugins}
            iconName='externalLink'
          />
          <FooterMenu
            title='Plugins repositories'
            dataSection='pluginRepo'
            dataTitle='pluginName'
            items={plugins}
            iconName='repo'
          />
          <FooterMenu
            title='support'
            dataSection='sourceUrl'
            dataTitle='sourceName'
            items={supportSources}
            iconName='link'
          />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
