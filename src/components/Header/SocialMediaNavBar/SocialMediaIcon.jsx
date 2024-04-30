// @vendors
import { useState } from 'react';

// @styles
import './_socialMediaIcon.scss';

export const SocialMediaIcon = ({ name, source, url }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open(url, 'chromeTab');
    setClicked(false);
    dispatchEvent(new MouseEvent('click', { shiftKey: true }));
  };

  return (
    <div className={clicked ? 'smi_container clicked' : 'smi_container'}>
      <img
        alt={name}
        className={
          clicked ? 'smi_social-m edia-logo clicked' : 'smi_social-media-logo'
        }
        src={`../../${source}`}
        loading="lazy"
        onClick={handleClick}
      />
    </div>
  );
};
