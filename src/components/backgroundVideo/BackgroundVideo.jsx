// @assets
import Video from '../../assets/videos/background-video.mp4';

// @styles
import '../backgroundVideo/backgroundVideo.scss';

export const BackgroundVideo = ({ blur, children }) => {
  return (
    <>
      <div className="bv__container">
        <video
          autoPlay="autoplay"
          className="bv__video"
          id="video-id"
          loop="loop"
          muted
          playsInline
          preload="auto"
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
        >
          <source src={`${Video}#t=0.001`} type="video/mp4" />
        </video>
        <div className="bv__content">{children}</div>
      </div>
      <span id="video-bottom"></span>
    </>
  );
};
