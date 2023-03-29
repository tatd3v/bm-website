import React from "react";
import { Navbar } from "react-bootstrap";

// @components

// @assets
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <div style={{ width: "100%", textAlign: "center" }}>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ maxWidth: "100%", maxHeight: "100px" }}
          />
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default Header;
