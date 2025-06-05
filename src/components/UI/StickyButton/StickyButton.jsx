import { useEffect, useState } from 'react';
import { VscCalendar } from 'react-icons/vsc';
import { RiCloseLargeFill } from 'react-icons/ri';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';

import './_stickyButton.scss';

export const StickyButton = ({ onClick, isOpen, parentComponent }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  useEffect(() => {
    if (parentComponent === 'sidebar' && !isOpen) {
      const timer = setTimeout(() => setShouldShowButton(true), 500);
      return () => clearTimeout(timer);
    }
    setShouldShowButton(false);
  }, [isOpen, parentComponent]);

  const handleClick = () => {
    if (isAnimating) return;
    onClick();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const buttonClasses = [
    'outer-button',
    parentComponent,
    isAnimating && 'clicked',
    parentComponent === 'sidebar' && (shouldShowButton ? 'fade-in' : 'fade-out'),
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`sb__container ${parentComponent}`}>
      <div className={buttonClasses} onClick={handleClick}>
        <div className="icon-container">
          {parentComponent === 'calendar' ? (
            <>
              <VscCalendar className={`calendar-icon ${isOpen ? 'hide' : 'show'}`} />
              <RiCloseLargeFill className={`close-icon ${isOpen ? 'show' : 'hide'}`} />
            </>
          ) : parentComponent === 'sidebar' ? (
            <TbLayoutSidebarLeftExpand className="sb__open-sidebar-icon" size={32} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
