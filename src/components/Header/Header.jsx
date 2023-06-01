import React from "react";
import { Container, Navbar } from "react-bootstrap";

// @components
import { SubNavbar } from "./SubNavbar";

// @assets
import Logo from "../../assets/LogoWhite.png";

// @styles
import "./header.css";

const Header = () => {
  return (
    <Navbar className="header__navbar" bg="transparent" expand="lg">
      <Container className="header__nav-container" fluid>
        <Navbar.Brand href="/" className="header__navbar-brand my-lg-0">
          <img
            src={Logo}
            alt="Logo"
            style={{ maxWidth: "70%", maxHeight: "200px" }}
          />
        </Navbar.Brand>
        <SubNavbar />
      </Container>
    </Navbar>
  );
};

export default Header;
