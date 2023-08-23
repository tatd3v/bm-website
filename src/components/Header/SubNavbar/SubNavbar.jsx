// @vendors
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// @styles
import './subNavbar.scss';

// @app
import {
  setShowCalendar,
  setShowDictionary,
  setShowSubNavbar,
} from '../../../app';

export const SubNavbar = () => {
  const dispatch = useDispatch();

  const { showSubNavbar } = useSelector((state) => state.ui.header);

  const onClickCalendar = () => {
    dispatch(setShowCalendar(true));
    dispatch(setShowDictionary(false));
    dispatch(setShowSubNavbar());
  };

  const onClickDictionary = () => {
    dispatch(setShowCalendar(false));
    dispatch(setShowDictionary(true));
    dispatch(setShowSubNavbar());
  };

  return (
    <>
      {showSubNavbar && (
        <Navbar.Collapse
          className={`sub-navbar__collapse ${showSubNavbar ? 'show' : ''}`}
          id="navbarScroll"
          variant="dark"
        >
          <Nav className="sub-navbar__container">
            <Nav.Link onClick={onClickCalendar}>Calendario</Nav.Link>
            <Nav.Link onClick={onClickDictionary}>Diccionario</Nav.Link>
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
          <Nav.Link>Aliados</Nav.Link>
          <Nav.Link>Contacto</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      )}
    </>
  );
};
