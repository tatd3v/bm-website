// @vendors
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @styles
import 'react-calendar/dist/Calendar.css';
import './_calendar.scss';

// @components
import { CalendarEvent } from '../Modals';

// @helpers
// import { eventsData } from '../../helpers';

// @app
import {
  setShowCalendar,
  setEventInfo,
  setShowEvent,
  setIsAnimating,
} from '../../app';

export const EventsCalendar = ({ isOpen }) => {
  const { eventsData, eventInfo } = useSelector(state => state.data.calendar);
  const { showCalendar, showEvent, isAnimating } = useSelector(
    state => state.ui.calendar
  );

  const dispatch = useDispatch();

  const calendarRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dispatch(setIsAnimating(true));
    } else {
      const timer = setTimeout(() => {
        dispatch(setIsAnimating(false));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = event => {
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
    date => {
      const eventData = eventsData?.find(event => {
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
        event => differenceInCalendarDays(date, new Date(event.date)) === 0
      );
      return highlighted ? 'react-calendar__tile--hasActive' : null;
    },
    [eventsData]
  );
  const tileContent = useCallback(
    ({ date, view }) => {
      const highlighted = eventsData?.find(
        event => differenceInCalendarDays(date, new Date(event.date)) === 0
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
    <div
      className={`calendar__container ${isAnimating ? 'animating' : ''} ${
        isOpen ? '' : 'closed'
      }`}
    >
      <div className="calendar__wrap" ref={calendarRef}>
        <Calendar
          locale="es-CO"
          onClickDay={onClickEvent}
          tileClassName={tileClassName}
          tileContent={tileContent}
        />
      </div>
      {showEvent && <CalendarEvent info={eventInfo} />}
    </div>
  );
};
