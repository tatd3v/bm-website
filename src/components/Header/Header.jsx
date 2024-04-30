// @vendors
import { Container, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// @app
import { setShowSubNavbar } from '../../app';

// @assets
import Logo from '../../assets/ShortLogoWhite.png';

// @components
import { SubNavbar } from './SubNavbar';
import { SocialMediaNav } from './SocialMediaNavBar';

// @styles
import './_header.scss';

const Header = () => {
  const dispatch = useDispatch();

  const toggleSubNavbar = () => {
    dispatch(setShowSubNavbar());
  };

  return (
    <Navbar
      className="header__navbar bg-light w-100 main-font-style pt-1"
      bg="transparent"
      expand="lg"
    >
      <Container
        className="header__nav-container d-flex flex-column justify-content-between align-items-center p-0 w-100"
        fluid
      >
        <div className="header_nav-logo-toggle-container d-flex justify-content-center align-items-center position-relative">
          <Navbar.Brand className="header__navbar-brand d-flex flex-column justify-content-between align-items-center my-lg-0 mx-0 p-0">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={toggleSubNavbar}
          />
        </div>
        <SocialMediaNav />
        <SubNavbar />
      </Container>
    </Navbar>
  );
};

export default Header;
