import React from 'react';
import { plugins, supportSources } from '../Data';
import SocialsMenu from '../components/SocialsMenu';
import FooterMenu from '../components/FooterMenu';
import Logo from '../components/Logo';
import Container from '../components/Container';
import NavLink from '../components/NavLink';
function Footer() {
  return (
    <footer id='footer'>
      <Container>
        <div className='footer__info'>
          <NavLink href='#header'>
            <Logo theme='light' />
          </NavLink>

          <SocialsMenu />
          <span className='footer__info__email'>FigmaOPsupport@gmail.com</span>
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
