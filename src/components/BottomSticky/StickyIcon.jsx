// @vendors
import { useState } from 'react';

// @styles
import './stickyIcon.scss';

export const StickyIcon = ({ name, source, url }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open(url, 'chromeTab');
    setClicked(false);
    dispatchEvent(new MouseEvent('click', { shiftKey: true }));
  };

  return (
    <div
      className={
        clicked ? 'sticky-icon_container clicked' : 'sticky-icon_container'
      }
    >
      <img
        alt={name}
        className={
          clicked ? 'si_social-media-logo clicked' : 'si_social-media-logo'
        }
        src={`../../${source}`}
        loading="lazy"
        onClick={handleClick}
      />
    </div>
  );
};
