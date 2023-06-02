// @vendors
import Calendar from 'react-calendar';
import { Container } from 'react-bootstrap';
import { differenceInCalendarDays } from 'date-fns';
import React, { useCallback, useRef, useState } from 'react';

// @styles
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

// @components
import { CalendarEvent } from '../Modals';

export const EventsCalendar = () => {
  const [show, setShow] = useState(false);
  const [eventInfo, setEventInfo] = useState({});
  const eventDates = useRef([
    {
      date: new Date(2023, 5, 11),
      id: 1,
      title: 'MATRIX',
      type: 'Mini Kiki Ball',
      image: {
        alt: 'matrix-mini-kiki-ball',
        src: 'https://i.ibb.co/7bPrMvy/matrix-mini-kiki-ball.jpg',
      },
    },
    {
      date: new Date(2023, 6, 2),
      id: 2,
      image: {
        alt: 'gay-pride-2023-kiki-ball',
        src: 'https://i.ibb.co/SszQ7PC/gay-pride-flag.jpg',
      },
      title: 'Pride 2023',
      type: 'Kiki Ball',
    },
  ]);
  const onClickEvent = useCallback((date) => {
    const eventData = eventDates.current.find((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getTime() === date.getTime();
    });
    setEventInfo(eventData);
    setShow(true);
  }, []);
  const tileClassName = useCallback(
    ({ date }) => {
      const highlighted = eventDates.current.some(
        (event) => differenceInCalendarDays(date, event.date) === 0
      );
      return highlighted ? 'react-calendar__tile--hasActive' : null;
    },
    [eventDates]
  );

  const tileContent = useCallback(
    ({ date, view }) => {
      const highlighted = eventDates.current.find(
        (event) => differenceInCalendarDays(date, event.date) === 0
      );
      const day = date.toLocaleString('en-US', { weekday: 'short' });
      const content =
        highlighted?.type ||
        (['Wed', 'Fri', 'Sun'].includes(day) ? 'Entrene' : '');

      return view === 'month' && content ? (
        <p className="react-calendar__tile-content--hasActive">{content}</p>
      ) : null;
    },
    [eventDates]
  );

  return (
    <Container>
      <h1 className="text-center">Calendario Ballroom Medellin</h1>
      <div className="calendar-container">
        <Calendar
          locale="es-CO"
          onClickDay={onClickEvent}
          tileClassName={tileClassName}
          tileContent={tileContent}
        />
      </div>
      <CalendarEvent info={eventInfo} show={show} setShow={setShow} />
    </Container>
  );
};
