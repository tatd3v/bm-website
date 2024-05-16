// @vendors
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

const SideCalendar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const actualYear = new Date().getFullYear();

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Calendario Ballroom Medellin {actualYear}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideCalendar;
