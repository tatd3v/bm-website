// @assets
import Video from '../../../assets/videos/background-video.mp4';

// @styles
import './backgroundVideo.css';

export const BackgroundVideo = ({ blur, children }) => {
  return (
    <>
      <div className="bv__container">
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video-id"
          playsInline
          className="bv__video"
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div className="bv__content">{children}</div>
      </div>
      <span id="video-bottom"></span>
    </>
  );
};
