// @styles
import './_socialMediaIcon.scss';

export const SocialMediaIcon = ({ name, source, url }) => {
  const handleClick = () => {
    window.open(url, 'chromeTab');
    dispatchEvent(new MouseEvent('click', { shiftKey: true }));
  };

  return (
    <div className="smi_container">
      <img
        alt={name}
        className="smi_social-media-logo"
        src={`../../${source}`}
        loading="lazy"
        onClick={handleClick}
      />
    </div>
  );
};
