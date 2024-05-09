// @styles
import './_liveRadio.scss';

export const LiveRadio = () => {
  return (
    <iframe
      allow="geolocation; microphone; camera; autoplay; encrypted-media"
      sandbox="allow-same-origin allow-scripts"
      src="https://radio.ballroomedellin.com/public/shade_radio/embed?theme=dark"
      title="Live Radio"
    ></iframe>
  );
};
