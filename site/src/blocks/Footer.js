import React from 'react';
import { plugins, supportSources } from '../Data';
import SocialsMenu from '../components/SocialsMenu';
import FooterMenu from '../components/FooterMenu';
import Logo from '../components/Logo';
const footerMenus = ['FigmaOP plugins', 'Plugins repositories', 'support'];
function Footer() {
  return (
    <footer>
      <Logo theme='light' />
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
      <SocialsMenu />
      <span className='rights'>© 2021 FigmaOP All rights reserved</span>
    </footer>
  );
}

export default Footer;
