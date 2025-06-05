// @vendors
import { memo, useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";

// @components
import { Loading } from "../Loading";

// @styles
import "./_youtubeEmbed.scss";

const YoutubeEmbed = () => {
  const { currentVideo } = useSelector((state) => state.youtubePlaylist);
  const hideLoading = useSelector((state) => state.ui.loading.hideLoading);

  const videoUrl = useMemo(() => {
    return currentVideo ? `https://www.youtube.com/embed/${currentVideo}` : null;
  }, [currentVideo]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasTriedToLoad, setHasTriedToLoad] = useState(false);

  useEffect(() => {
    if (currentVideo) {
      setIsLoading(true);
      setHasTriedToLoad(true);
    }
  }, [currentVideo]);

  return (
    <div className="ye__responsive-container" id="player">
      {isLoading && !hideLoading && <Loading />}

      {videoUrl && (
        <iframe
          src={videoUrl}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      )}

      {!videoUrl && hasTriedToLoad && !isLoading && (
        <p className="ye__no-video">No hay videos para mostrar</p>
      )}
    </div>
  );
};

export default memo(YoutubeEmbed);
