// @vendors
import { useMemo } from 'react';
import { AdvancedVideo } from '@cloudinary/react';

// @styles
import './_video-player.scss';

const VideoPlayer = () => {
  const memoAdvanceVideo = useMemo(() => {
    return (
      <AdvancedVideo
        autoPlay
        controls={false}
        className="vp__advance-player"
        // cldVid={}
        loop
        muted
        playsInline
        preload="auto"
      />
    );
  }, []);

  return (
    <div className="vp__container">
      {<div className="vp__container">{memoAdvanceVideo}</div>}
    </div>
  );
};

export default VideoPlayer;
