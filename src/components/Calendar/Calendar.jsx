// @vendors
import Calendar from 'react-calendar';
import { Container } from 'react-bootstrap';
import { differenceInCalendarDays } from 'date-fns';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @styles
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

// @components
import { CalendarEvent } from '../Modals';
import { useRef } from 'react';

// @helpers
// import { eventsData } from '../../helpers';

// @app
import { setShowCalendar, setEventInfo, setShowEvent } from '../../app';

export const EventsCalendar = () => {
  const { eventsData, eventInfo } = useSelector((state) => state.data.calendar);
  const { showCalendar, showEvent } = useSelector((state) => state.ui.calendar);

  const dispatch = useDispatch();

  const calendarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const clickedOutsideCalendar =
        calendarRef.current && !calendarRef.current.contains(event.target);

      if (
        clickedOutsideCalendar &&
        !event.target.classList.contains('nav-link') &&
        !event.target.classList.contains('modal') &&
        !showEvent
      ) {
        dispatch(setShowCalendar(false));
      }
    };

    if (showCalendar) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [showCalendar, showEvent]);

  const onClickEvent = useCallback(
    (date) => {
      const eventData = eventsData?.find((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getTime() === date.getTime();
      });
      dispatch(setEventInfo(eventData));
      dispatch(setShowEvent(true));
    },
    [eventsData]
  );

  const tileClassName = useCallback(
    ({ date }) => {
      const highlighted = eventsData?.some(
        (event) => differenceInCalendarDays(date, new Date(event.date)) === 0
      );
      return highlighted ? 'react-calendar__tile--hasActive' : null;
    },
    [eventsData]
  );
  const tileContent = useCallback(
    ({ date, view }) => {
      const highlighted = eventsData?.find(
        (event) => differenceInCalendarDays(date, new Date(event.date)) === 0
      );
      const day = date.toLocaleString('en-US', { weekday: 'short' });
      const content =
        highlighted?.type ||
        (['Wed', 'Fri', 'Sun'].includes(day) ? 'Entrene' : '');

      return view === 'month' && content ? (
        <p className="react-calendar__tile-content--hasActive">{content}</p>
      ) : null;
    },
    [eventsData]
  );

  return (
    <Container className="calendar-container">
      <div className="calendar-wrap" ref={calendarRef}>
        <Calendar
          locale="es-CO"
          onClickDay={onClickEvent}
          tileClassName={tileClassName}
          tileContent={tileContent}
        />
      </div>
      {showEvent && <CalendarEvent info={eventInfo} />}
    </Container>
  );
};
