// @vendors
import Calendar from 'react-calendar';
import { Container } from 'react-bootstrap';
import { differenceInCalendarDays } from 'date-fns';
import React, { useCallback, useRef } from 'react';

// @styles
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

export const EventsCalendar = () => {
  const eventDates = useRef([
    {
      date: new Date(2023, 5, 11),
      id: 1,
      title: 'MATRIX',
      type: 'Mini Kiki Ball',
      img: 'https://ibb.co/PtK1XxC',
    },
    {
      date: new Date(2023, 6, 19),
      id: 1,
      title: 'MATRIX mini Kiki Ball',
      img: 'https://ibb.co/PtK1XxC',
    },
  ]);
  const onClickEvent = useCallback((date) => {
    const eventData = eventDates.current.find((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getTime() === date.getTime();
    });
    console.log('Clicked date data:', eventData);
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
    </Container>
  );
};
