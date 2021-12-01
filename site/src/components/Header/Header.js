import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Button from '../Buttons/Button';
import Logo from '../Icons/Logo';
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
      window.innerWidth >= 1000 ? setLargeScreen(true) : setLargeScreen(false);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [largeScreen]);

  return (
    <header id='header'>
      <Container>
        <Logo />
        <NavMenu show={showMenu} setShowMenu={setShowMenu} />
        <Button
          type='icon'
          iconClasses='header__menu__icon'
          iconName={showMenu ? 'close' : 'menu'}
          ariaLabel='menu button'
          onClick={handleToggleMenu}
        />
      </Container>
    </header>
  );
}

export default Header;
