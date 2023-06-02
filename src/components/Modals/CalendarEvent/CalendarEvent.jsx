// @vendors
import { Image, Modal } from 'react-bootstrap';
import React, { useCallback } from 'react';

// @styles
import './calendarEvent.scss';

export const CalendarEvent = ({ info = {}, show = true, setShow }) => {
  const handleClose = useCallback(() => {
    setShow(false);
  }, []);

  console.log(info);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header>
        <Modal.Title>{info?.title || 'Hack the System'}</Modal.Title>
        <h6>{info?.type || 'Kiki Ball'}</h6>
      </Modal.Header>
      <Modal.Body>
        <Image
          alt={info?.image?.alt || 'ballroom-medellin-events'}
          border="0"
          fluid
          src={
            info?.image?.src || 'https://i.ibb.co/SszQ7PC/gay-pride-flag.jpg'
          }
        />
      </Modal.Body>
    </Modal>
  );
};
