import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

// @components
import { SubNavbar } from './SubNavbar';

// @assets
import Logo from '../../assets/LogoWhite.png';

// @styles
import './header.scss';

const Header = () => {
  return (
    <Navbar className="header__navbar" bg="transparent" expand="lg">
      <Container className="header__nav-container" fluid>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Navbar.Brand href="/" className="header__navbar-brand my-lg-0">
            <img
              src={Logo}
              alt="Logo"
              style={{ maxWidth: '70%', maxHeight: '200px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <SubNavbar />
      </Container>
    </Navbar>
  );
};

export default Header;
