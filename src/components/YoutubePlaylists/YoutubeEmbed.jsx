// @vendors
import { memo, useMemo, useState, useEffect } from "react";
import { useSelector } from 'react-redux';

// @components
import { Loading } from "../Loading";

// @styles
import './_youtubeEmbed.scss';

const YoutubeEmbed = () => {
  const { currentVideo } = useSelector((state) => state.youtubePlaylist);
  const hideLoading = useSelector((state) => state.ui.loading.hideLoading);

  const videoUrl = useMemo(() => {
    return currentVideo ? `https://www.youtube.com/embed/${currentVideo}` : null;
  }, [currentVideo]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoUrl) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
      return () => clearTimeout(timer);
    }
  }, [videoUrl]);

  if (!videoUrl) {
    return <p className="ye__no-video">No video available</p>;
  }

  return (
    <div className="ye__responsive-container" id="player">
      {isLoading && !hideLoading ? <Loading /> : null}
      <iframe
        src={videoUrl}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default memo(YoutubeEmbed);
