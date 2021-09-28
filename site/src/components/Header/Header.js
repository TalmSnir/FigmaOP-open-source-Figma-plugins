import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Button from '../Button';
import Logo from '../Logo';
import Container from '../Container';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    largeScreen ? setShowMenu(true) : setShowMenu(false);
  }, [largeScreen]);
  useEffect(() => {
    const handleWindowResize = () => {
      window.innerWidth >= 768 ? setLargeScreen(true) : setLargeScreen(false);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [largeScreen]);

  return (
    <header id='header'>
      <Container>
        <Logo />
        <NavMenu show={showMenu} />
        <Button
          iconClasses='header__menu__icon'
          iconName={showMenu ? 'close' : 'menu'}
          onClick={handleToggleMenu}
        />
      </Container>
    </header>
  );
}

export default Header;
