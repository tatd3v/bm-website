import { useState } from 'react';
import { VscCalendar } from 'react-icons/vsc';
import { RiCloseLargeFill } from 'react-icons/ri';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';

import './_stickyButton.scss';

export const StickyButton = ({ onClick, isOpen, parentComponent }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const handleClick = () => {
    if (isAnimating) return;

    onClick();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div
      className={`outer-button ${isAnimating ? 'clicked' : ''}`}
      onClick={handleClick}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="icon-container">
        {parentComponent === 'calendar' ? (
          <>
            <VscCalendar
              className={`calendar-icon ${isOpen ? 'hide' : 'show'}`}
            />
            <RiCloseLargeFill
              className={`close-icon ${isOpen ? 'show' : 'hide'}`}
            />
          </>
        ) : parentComponent === 'sidebar' ? (
          <TbLayoutSidebarLeftExpand claseName={!isOpen ? 'show' : 'hide'} />
        ) : null}
      </div>
    </div>
  );
};
