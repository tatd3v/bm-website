// @vendors
import { Image, Modal } from 'react-bootstrap';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @styles
import './calendarEvent.scss';

// @app
import { setShowEvent } from '../../../app';

export const CalendarEvent = ({ info = {} }) => {
  const dispatch = useDispatch();

  const { eventsData } = useSelector((state) => state.data);
  const { showEvent } = useSelector((state) => state.ui.calendar);

  const handleClose = useCallback(() => {
    dispatch(setShowEvent(false));
  }, []);

  console.log(eventsData);

  return (
    <Modal show={showEvent} onHide={handleClose} animation={false}>
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
