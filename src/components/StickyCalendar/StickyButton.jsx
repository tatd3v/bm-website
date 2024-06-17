import { useState } from 'react';
import { VscCalendar } from 'react-icons/vsc';
import { RiCloseLargeFill } from 'react-icons/ri';

import './styles/_stickyButton.scss';

export const StickyButton = ({ onClick, isOpen }) => {
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
        <VscCalendar className={`calendar-icon ${isOpen ? 'hide' : 'show'}`} />
        <RiCloseLargeFill
          className={`close-icon ${isOpen ? 'show' : 'hide'}`}
        />
      </div>
    </div>
  );
};
