// @vendors
import { useEffect, useRef } from 'react';
import { Container, Navbar } from 'react-bootstrap';

// @assets
import Logo from '../../assets/logo.png';

// @components
import { SubNavbar } from './SubNavbar';
import { SocialMediaNav } from './SocialMediaNavBar';

// @styles
import './_header.scss';

const Header = () => {
  const collapseRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = event => {
      const container = collapseRef.current;

      if (
        container &&
        !container.contains(event.target) &&
        !event.target.closest('.navbar-toggler')
      ) {
        if (container.classList.contains('show')) {
          toggleButtonRef.current.click();
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Navbar
      className="header__navbar w-100 main-font-style"
      bg="transparent"
      expand="lg"
    >
      <Container
        className="header__nav-container d-flex flex-column justify-content-between align-items-center p-0 w-100"
        fluid
      >
        <div className="header_nav-logo-toggle-container d-flex justify-content-center align-items-center position-relative">
          <Navbar.Brand className="header__navbar-brand d-flex flex-row justify-content-center my-lg-0 mx-0 p-0">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
        </div>
        <div className="header__menu-toggle-position d-lg-none">
          <SubNavbar />
        </div>
        <SocialMediaNav />
        <div className="d-none d-lg-block w-100">
          <SubNavbar />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
