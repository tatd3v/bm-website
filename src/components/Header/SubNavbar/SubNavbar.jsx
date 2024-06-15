// @vendors
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// @styles
import './subNavbar.scss';

// @app
import { setEventInfo, setShowCalendar, setShowDictionary } from '../../../app';

// @helpers
import { extractNumbersFromString } from '../../../helpers';

const SubNavbar = () => {
  const dispatch = useDispatch();

  const { eventsByYear } = useSelector((state) => state.data.calendar);

  // const onClickCalendar = () => {
  //   dispatch(setShowCalendar(true));
  //   dispatch(setShowDictionary(false));
  // };

  const onClickDictionary = () => {
    dispatch(setShowCalendar(false));
    dispatch(setShowDictionary(true));
  };

  const onClickEvent = (event) => {
    dispatch(setEventInfo(event));
  };

  return (
    <>
      <Nav className="sub-navbar__container">
        {/* <Nav.Link eventKey="1" onClick={onClickCalendar}>
          Calendario
        </Nav.Link> */}
        <Nav.Link eventKey="2" onClick={onClickDictionary}>
          Diccionario
        </Nav.Link>
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
                          eventKey={`3.${event.id}`}
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
    </>
  );
};

SubNavbar.displayName = 'SubNavbar';

export default SubNavbar;
