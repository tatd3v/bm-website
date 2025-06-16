// @vendors
import { memo, useState, useEffect, useCallback } from "react";
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

// @components
import { Loading } from "../Loading";

// @styles
import "./_youtubeEmbed.scss";

const YoutubeEmbed = () => {
  const { currentVideo } = useSelector((state) => state.youtubePlaylist);
  const hideLoading = useSelector((state) => state.ui.loading.hideLoading);

  const [isLoading, setIsLoading] = useState(true);
  const [hasTriedToLoad, setHasTriedToLoad] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      tag.onload = () => {
        setApiLoaded(true);
      };
      document.body.appendChild(tag);
    } else {
      setApiLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (currentVideo) {
      setIsLoading(true);
      setHasTriedToLoad(true);
    }
  }, [currentVideo]);

  const handlePlayerReady = useCallback(() => {
    // Autoplay will start, then pause immediately if needed
    setIsLoading(false);
    // You can control playback here if desired
    // event.target.pauseVideo();
  }, []);

  const handlePlayerError = useCallback(() => {
    setIsLoading(false);
  }, []);

  const playerOptions = {
    height: "100vh",
    width: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="ye__responsive-container" id="player">
      {isLoading && !hideLoading && <Loading loaderHeight={200} />}

      {apiLoaded && currentVideo ? (
        <YouTube
          videoId={currentVideo}
          opts={playerOptions}
          onReady={handlePlayerReady}
          onError={handlePlayerError}
          className="ye__youtube-iframe"
          iframeClassName="ye__youtube-frame"
        />
      ) : (
        hasTriedToLoad && !isLoading && (
          <p className="ye__no-video">No hay videos para mostrar</p>
        )
      )}
    </div>
  );
};

export default memo(YoutubeEmbed);