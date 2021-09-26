import React from 'react';
import { plugins, supportSources } from '../Data';
import SocialsMenu from '../components/SocialsMenu';
import FooterMenu from '../components/FooterMenu';
import Logo from '../components/Logo';
import Container from '../components/Container';
function Footer() {
  return (
    <footer id='footer'>
      <Container>
        <div className='footer__info'>
          <Logo theme='light' />
          <SocialsMenu />
          <span className='rights'>© 2021 TalmSnir All rights reserved</span>
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
