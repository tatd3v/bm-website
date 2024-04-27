// @vendors

export const LiveRadio = () => {
  return (
      <iframe
        allow="geolocation; microphone; camera; autoplay; encrypted-media"
        sandbox="allow-same-origin allow-scripts"
        src="https://radio.ballroomedellin.com/public/shade_radio/embed?theme=dark"
        style={{
          background: 'none transparent',
          border: '0',
          maxHeight: '100%',
          maxWidth: '100%',
          minHeight: '100%',
          minWidth: '100%'
        }}
        title="Live Radio"
      ></iframe>
  );
};