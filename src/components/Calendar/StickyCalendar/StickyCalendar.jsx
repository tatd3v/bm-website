// @vendors
import { useState } from 'react';

// @components
import { EventsCalendar, StickyButton } from '@components';

import './styles/_stickyCalendar.scss';

export const StickyCalendar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`sticky-calendar-container ${isOpen ? 'open' : ''}`}>
      <EventsCalendar isOpen={isOpen} />
      <StickyButton
        onClick={toggleMenu}
        isOpen={isOpen}
        parentComponent="calendar"
      />
    </div>
  );
};
