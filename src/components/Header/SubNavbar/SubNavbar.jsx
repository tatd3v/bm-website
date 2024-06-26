// @vendors
import { forwardRef, useEffect } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// @styles
import './subNavbar.scss';

// @app
import {
  setEventInfo,
  setShowCalendar,
  setShowDictionary,
  setShowSubNavbar,
} from '../../../app';

// @helpers
import { extractNumbersFromString } from '../../../helpers';

const SubNavbar = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { header, device } = useSelector((state) => state.ui);
  const { isMobile } = device;
  const { showSubNavbar } = header;

  const { eventsByYear } = useSelector((state) => state.data.calendar);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSubNavbar && !event.target.closest('.sub-navbar__collapse')) {
        dispatch(setShowSubNavbar(false));
      }
    };

    if (showSubNavbar && isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, isMobile, showSubNavbar]);

  const onClickCalendar = () => {
    dispatch(setShowCalendar(true));
    dispatch(setShowDictionary(false));
  };

  const onClickDictionary = () => {
    dispatch(setShowCalendar(false));
    dispatch(setShowDictionary(true));
  };

  const onClickEvent = (event) => {
    dispatch(setEventInfo(event));
  };

  return (
    <>
      <Navbar.Collapse
        className={`sub-navbar__collapse ${
          showSubNavbar && isMobile ? 'show' : ''
        }`}
        id="navbarScroll"
        variant="dark"
      >
        <Nav className="sub-navbar__container" ref={ref}>
          <Nav.Link onClick={onClickCalendar}>Calendario</Nav.Link>
          <Nav.Link onClick={onClickDictionary}>Diccionario</Nav.Link>
          <NavDropdown title="Balls" id="collasible-nav-dropdown">
            <>
              {Object.keys(eventsByYear).map((year, index) => {
                return (
                  <div key={year}>
                    <Container>
                      <h4>{extractNumbersFromString(year)}</h4>
                      {eventsByYear[year].map((event) => {
                        return (
                          <NavDropdown.Item
                            key={event.id}
                            as={Link}
                            onClick={() => onClickEvent(event)}
                            to={`gallery${event.path}`}
                          >
                            {`${event.title} ${event.type}`}
                          </NavDropdown.Item>
                        );
                      })}
                    </Container>
                    {index !== Object.keys(eventsByYear).length - 1 && (
                      <NavDropdown.Divider />
                    )}
                  </div>
                );
              })}
            </>
          </NavDropdown>
          {/*<Nav.Link>Historia</Nav.Link>
          <Nav.Link>Categorias</Nav.Link>
          <Nav.Link>Identidades</Nav.Link>
          <Nav.Link>Portafolios</Nav.Link>
          <Nav.Link>Tienda</Nav.Link>
          <Nav.Link>Podcast</Nav.Link>
          <Nav.Link>Aliados</Nav.Link>
          <Nav.Link>Contacto</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </>
  );
});

SubNavbar.displayName = 'SubNavbar';

export default SubNavbar;
