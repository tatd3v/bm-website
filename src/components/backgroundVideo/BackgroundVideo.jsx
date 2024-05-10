// @assets
import { backgroundVidMp4, backgroundVidWebm } from '@/assets';

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
          <source src={backgroundVidMp4} type="video/mp4" />
          <source src={backgroundVidWebm} type="video/webm" />
        </video>
        <div className="bv__content">{children}</div>
      </div>
      <span id="video-bottom"></span>
    </>
  );
};
