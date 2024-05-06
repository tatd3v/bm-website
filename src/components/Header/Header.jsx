// @vendors
import { useState, useEffect, useRef } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// @assets
import Logo from '../../assets/ShortLogoWhite.png';

// @app
import { setShowSubNavbar } from '../../app';

// @components
import { SubNavbar } from './SubNavbar';
import { SocialMediaNav } from './SocialMediaNavBar';

// @styles
import './_header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const showSubNavbar = useSelector((state) => state.ui.header.showSubNavbar);
  const [isSubNavbarOpen, setIsSubNavbarOpen] = useState(false);
  const subNavbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        subNavbarRef.current &&
        !subNavbarRef.current.contains(event.target)
      ) {
        dispatch(setShowSubNavbar(false));
        setIsSubNavbarOpen(false);
      }
    };

    if (isSubNavbarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSubNavbarOpen, dispatch]);

  const toggleSubNavbar = () => {
    dispatch(setShowSubNavbar(!showSubNavbar));
    setIsSubNavbarOpen(!isSubNavbarOpen);
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
        {showSubNavbar && <SubNavbar ref={subNavbarRef} />}
      </Container>
    </Navbar>
  );
};

export default Header;
