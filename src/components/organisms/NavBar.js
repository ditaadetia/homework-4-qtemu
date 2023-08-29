// Organism: NavBar
import React from 'react';
import LoginButton from '../atoms/LoginButton';
import BrandLogo from '../atoms/BrandLogo';
import NavLinks from '../molecules/NavLinks';
function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <BrandLogo />
        <NavLinks />
        <LoginButton />
      </nav>
    );
}
export default NavBar;