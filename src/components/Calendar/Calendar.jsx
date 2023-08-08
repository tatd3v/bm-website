// @vendors
import Calendar from 'react-calendar';
import { Container } from 'react-bootstrap';
import { differenceInCalendarDays } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
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
import { setShowCalendar, setShowEvent } from '../../app';

export const EventsCalendar = () => {
  const [eventInfo, setEventInfo] = useState({});

  const eventsData = useSelector((state) => state.data.eventsData);
  const { showCalendar, showEventInfo } = useSelector(
    (state) => state.ui.calendar
  );

  const dispatch = useDispatch();

  const calendarRef = useRef(null);

  useEffect(() => {
    if (showCalendar) {
      const handleOutsideClick = (event) => {
        console.log(
          { showEventInfo },
          event,
          { calendarRef },
          'event',
          event.target.classList.contains(
            'react-calendar' && 'react-calendar__month-view__days'
          ),
          event.target.classList.contains('nav-link')
        );
        if (event.target.classList.contains('react-calendar')) {
          return;
        }
        if (event.target.classList.contains('nav-link')) {
          return;
        }

        dispatch(setShowCalendar(true));
      };

      window.addEventListener('click', handleOutsideClick);

      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, []);

  const onClickEvent = useCallback(
    (date) => {
      const eventData = eventsData?.find((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getTime() === date.getTime();
      });
      setEventInfo(eventData);
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
    <Container>
      <div className="calendar-container" ref={calendarRef}>
        <Calendar
          locale="es-CO"
          onClickDay={onClickEvent}
          tileClassName={tileClassName}
          tileContent={tileContent}
        />
      </div>
      <CalendarEvent info={eventInfo} />
    </Container>
  );
};
