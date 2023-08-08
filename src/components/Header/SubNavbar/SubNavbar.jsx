import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
//NavDropdown

// @styles
import './subNavbar.css';

export const SubNavbar = () => {
  return (
    <>
      <Navbar.Collapse
        className="sub-navbar__collapse"
        id="navbarScroll"
        variant="dark"
      >
        <Nav className="sub-navbar__container">
          <Nav.Link>Calendario</Nav.Link>
          {/*<NavDropdown title="Balls" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fotos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Vdeos</NavDropdown.Item>
              <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>Historia</Nav.Link>
          <Nav.Link>Categorias</Nav.Link>
          <Nav.Link>Identidades</Nav.Link>
          <Nav.Link>Portafolios</Nav.Link>
          <Nav.Link>Tienda</Nav.Link>
          <Nav.Link>Podcast</Nav.Link>
          <Nav.Link>Diccionario</Nav.Link>
          <Nav.Link>Aliados</Nav.Link>
          <Nav.Link>Contacto</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </>
  );
};
