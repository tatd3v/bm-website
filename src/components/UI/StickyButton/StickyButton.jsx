import { useEffect, useState } from 'react';
import { VscCalendar } from 'react-icons/vsc';
import { RiCloseLargeFill } from 'react-icons/ri';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';

import './_stickyButton.scss';

export const StickyButton = ({ onClick, isOpen, parentComponent }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  useEffect(() => {
    if (!isOpen && parentComponent === 'sidebar') {
      const timer = setTimeout(() => setShouldShowButton(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShouldShowButton(false);
    }
  }, [isOpen, parentComponent]);

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
    <div className={`sb__container ${parentComponent}`}>
      <div
        className={`outer-button ${parentComponent} ${isAnimating ? 'clicked' : ''
          } ${parentComponent === 'sidebar'
            ? !shouldShowButton
              ? 'fade-out'
              : 'fade-in'
            : ''
          }`}
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
            <TbLayoutSidebarLeftExpand
              className="sb__open-sidebar-icon"
              size={32}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
