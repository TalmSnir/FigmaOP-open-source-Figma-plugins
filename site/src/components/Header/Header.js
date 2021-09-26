import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Button from '../Button';
import Logo from '../Logo';
import Container from '../Container';

function Header() {
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [largeScreenMenu, setLargeScreenMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setShowMenuButton(false);
      setShowMenu(true);
      setLargeScreenMenu(true);
    } else {
      setShowMenuButton(true);
      setLargeScreenMenu(false);
      !showMenu ? setShowMenu(true) : setShowMenu(true);
    }
  };
  useEffect(() => {
    handleWindowResize();
  }, []);
  window.addEventListener('resize', handleWindowResize);
  return (
    <header>
      <Container>
        <Logo />
        {showMenu && <NavMenu largeScreenMenu={largeScreenMenu} />}
        {showMenuButton && (
          <Button
            iconClasses='header__menu__icon'
            iconName={showMenu ? 'close' : 'menu'}
            onClick={handleToggleMenu}
          />
        )}
      </Container>
    </header>
  );
}

export default Header;
